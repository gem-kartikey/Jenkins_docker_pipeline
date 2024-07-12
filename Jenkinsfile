node{
    def dockerImage

    stage('Checkout')
    {
        git branch: 'main' ,url:'https://github.com/gem-kartikey/Jenkins_docker_pipeline.git'
    }
    stage('Build Docker Image')
    {
        dockerImage = docker.build('nodejs-app','-f Dockerfile .')
    }
    stage('Run Docker Container'){
        dockerImage.run('-p 4000:4000')
    }
}