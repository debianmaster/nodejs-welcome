node {
  stage 'st1'
    echo 'test1'
  stage 'st2'
    echo 'test2'
  stage 'build in development'
    // This step should not normally be used in your script. Consult the inline help for details.
    //buildImage email: '', name: 'teste', password: '', path: 'nexus', rm: false, timeout: 20, username: ''
     
    kubernetes.pod('buildpod').withImage('maven').inside {   
      //error 'hello world'
      git 'https://github.com/debianmaster/spring-sample-app.git'
      //sh 'mvn clean package'
      buildImage email: '9chakri@gmail.com', name: 'tester1', password: '', path: 'docker.io/debianmaster', rm: false, username: 'debianmaster'
    } 
    echo 'asdfasdfs'
}
