node{
    def dockerImage
    // environment {
    //     dockerHome = tool name: 'Docker', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
    // }
    stage('Checkout')
    {
        git branch: 'main' ,url:'https://github.com/gem-kartikey/Jenkins_docker_pipeline.git'
    }
    stage('Build Docker Image')
    {
        // dockerImage = docker.build('nodejs-app','-f Dockerfile .')
        sh "Docker buld -t node-app ."
    }
    stage('Run Docker Container'){
        // dockerImage.run('-p 4000:4000')
        sh "Docker run -p 4000:4000 node-app"
    }
}