pipeline {
    agent {label 'built-in'}
    stages {
        stage('Build') {
            steps {
                //Using DockerHub as Container Image repo. Log in, build image, and then push it to DockerHub using credentials.
                withCredentials([usernamePassword(credentialsId: 'wms_backend_pwd', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                    docker login --username $USERNAME --password $PASSWORD
                    docker build -t $USERNAME/warehouse-frontend:${env.BUILD_NUMBER} -t $USERNAME/warehouse-frontend:latest .
                    docker push $USERNAME/warehouse-frontend --all-tags
                    docker image prune -f
                    """
                }
                echo '========== Continuous Integration ends here =========='
            }
        }
        stage('Deploy to Kubernetes') {
                    steps {
                        echo '========== Continuous Deployment begins here =========='
                            sh """
                            sleep 5
                            kubectl apply --namespace demo-ascend-namespace -f 'deployment.yaml' --validate=false
                            sleep 30
                            kubectl get all --namespace demo-ascend-namespace
                            """
                        echo '========== Continuous Deployment ends here =========='
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
