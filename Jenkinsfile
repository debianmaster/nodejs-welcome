node {
  stage 'st1'
    echo 'test1'
  stage 'st2'
    echo 'test2'
  stage 'build in development'{
      kubernetes.pod('buildpod').withImage('maven').inside {      
        git 'https://github.com/fabric8io/kubernetes-workflow.git'
        sh 'mvn clean install'
      } 
  } 
}
