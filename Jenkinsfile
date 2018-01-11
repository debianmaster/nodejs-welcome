pipeline {
  agent any
  stages {
      
    stage('Verify/Create Objects in DEV') {
      when {
        expression {
          openshift.withCluster() {
            return !openshift.selector('bc', 'welcome').exists();
          }
        }
      }
      steps {
        script {
          openshift.withCluster() {
            openshift.newApp('https://github.com/debianmaster/nodejs-welcome.git','--name','welcome');
          }
        }
      }
    }
    stage('Verify / Create objects in QA') {
            openshift.withProject( 'dev' ) {
                def welcome = openshift.selector( 'dc', [ app: 'welcome' ] )
                def welcomeObjects = welcome.objects( exportable:true )
                openshift.withProject( 'qa' ) {
                     openshift.create( welcomeObjects )
                }
            }
    }
  }
}
