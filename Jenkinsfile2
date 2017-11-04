node('')  {
    stage 'Build' {
        openshift.withCluster( 'https://aws.ck.osecloud.com:8443', 'iyFVwvfSnv1Ho7CWJgpZe_yAiC1hls2Ybkxo2vnoK5g' ) {
            openshift.withProject( 'dev' ) {
                 def created = openshift.newApp( 'https://github.com/debianmaster/nodejs-welcome.git','--name','welcome')
                 def bc = created.narrow('bc')
                 bc.logs('-f')
            }
        }
    }
}
