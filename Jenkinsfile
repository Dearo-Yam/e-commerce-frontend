pipeline {
    agent {label 'built-in'}
    stages {
        stage('Build') {
            steps {
                //Using DockerHub as Container Image repo. Log in, build image, and then push it to DockerHub using credentials.
                withCredentials([usernamePassword(credentialsId: 'wms_backend_pwd', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                    docker login --username $USERNAME --password $PASSWORD
                    docker build -t $USERNAME/wms-frontend:${env.BUILD_NUMBER} .
                    docker push $USERNAME/wms-frontend:${env.BUILD_NUMBER}
                    docker image prune -f
                    """
                }
                echo '========== Continuous Integration ends here =========='
            }
        }
    }
        post {
            always {
                echo 'Cleaning ws'
                cleanWs()
            }
        }
}
