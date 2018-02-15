        node('') {
          stage 'Build'
            openshiftBuild(namespace:'dev',buildConfig: 'welcome', showBuildLogs: 'true')
          stage 'Deploy'
            openshiftDeploy(namespace:'dev',deploymentConfig: 'welcome')
          stage 'Test'
            sh 'echo "testing"'
          stage 'Promote to QA'
            input 'Proceeed ?'
            sh 'oc tag dev/welcome:latest dev/welcome:promoteToQA'
        }
