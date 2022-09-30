pipeline {
    agent { dockerfile true }
    stages {
        stage('Build, Pack and Clean up') {
            steps {
                echo 'Build, Pack into docker images and Push to DockerHub.'
                withCredentials([usernamePassword(credentialsId: 'wms_backend_pwd', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                                    sh """
                                    docker login --username $USERNAME --password $PASSWORD
                                    docker build -t $USERNAME/wms_frontend:${env.BUILD_NUMBER} .
                                    docker push $USERNAME/wms_frontend:${env.BUILD_NUMBER}
                                    docker image prune -f
                                    """
                                }
            }
        }
        stage('Clean Workspace'){
            steps {
                cleanWs()
            }
        }
    }
}
