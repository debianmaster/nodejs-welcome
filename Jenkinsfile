node {
  stage 'build in development'{
      kubernetes.pod('buildpod').withImage('maven').inside {      
        git 'https://github.com/fabric8io/kubernetes-workflow.git'
        sh 'mvn clean install'
      } 
  }
  
}
