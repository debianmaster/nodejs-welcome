node {
    git 'https://github.com/fabric8-quickstarts/node-example.git'
    if (!fileExists ('Dockerfile')) {
      writeFile file: 'Dockerfile', text: 'FROM node:5.3-onbuild'
    }
    kubernetes.image().withName("example").build().fromPath(".")
    kubernetes.image().withName("example").tag().inRepository("172.30.101.121:5000/default/example").withTag("1.0")
    kubernetes.image().withName("172.30.101.121:5000/default/example").push().withTag("1.0").toRegistry()
} 
