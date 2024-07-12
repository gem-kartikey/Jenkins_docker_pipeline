node{
    def dockerImage

    stage('Checkout')
    {
        checkout([$class:'GitSCM',
        branches:[[name:'*/main']],
        userRemoteConfigs:[[urls:'https://github.com/gem-kartikey/Jenkins_docker_pipeline']]])
    }
    stage('Build Docker Image')
    {
        dockerImage = docker.build('nodejs-app','-f Dockerfile .')
    }
    stage('Run Docker Container'){
        dockerImage.run('-p 4000:4000')
    }
}