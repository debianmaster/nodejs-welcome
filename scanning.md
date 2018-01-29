
oc create -f https://raw.githubusercontent.com/samueltauil/openscap-openshift/master/image-inspector-template.json

oc secrets new-dockercfg docker-registry \
    --docker-server=docker-registry.default.svc:5000/dev/welcome --docker-username=admin \
    --docker-password=$(oc whoami -t) --docker-email=9chakri@gmail.com




def review = "Review Results? http://"
node {
  stage 'build app'
    openshiftBuild(namespace: 'dev', buildConfig: 'welcome', showBuildLogs: 'true')
  stage 'execute image scan'
    sh "oc delete all -l app=image-inspector"
    sh "oc process image-inspector-template -p APPLICATION_NAME=image-inspector -p IMAGE_URL=docker-registry.default.svc:5000/dev/welcome:latest | oc apply -f -"
    review += sh(script: "oc get routes -l app=image-inspector --no-headers -o 'jsonpath={.items[*].spec.host}'", returnStdout: true).trim()
    review += "/api/v1/content/results.html"
  stage 'Review'
    input review
}



apiVersion: v1
kind: BuildConfig
metadata:
  creationTimestamp: null
  labels:
    app: jenkins-pipeline-example
    name: sample-pipeline
    template: application-template-sample-pipeline
  name: sample-pipeline
spec:
  nodeSelector: null
  output: {}
  postCommit: {}
  resources: {}
  runPolicy: Serial
  source:
    type: None
  strategy:
    jenkinsPipelineStrategy:
      jenkinsfile: "node {\n    \n}"
    type: JenkinsPipeline
  triggers: []
status:
  lastVersion: 0
