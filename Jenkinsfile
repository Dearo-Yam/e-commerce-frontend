pipeline {
    agent {label 'built-in'}
    tools {nodejs "nodejs-18"}

    stages {
        stage('Clean up docker images') {
            steps {
                sh 'docker image prune -f'
            }
        }
        stage('Build the application with Nodejs') {
            steps {
                sh 'npm version'
                sh 'npm install --legacy-peer-deps'
                sh 'npm run build'
            }
        }
        stage('Package with nginx') {
            agent {
                docker {
                    image 'nginx:stable'
                    args '-v $HOME/.m2:/root/.m2'
                }
            }
            stages {
                stage('Push to docker hub') {
                    steps {
                //Using DockerHub as Container Image repo. Log in, build image, and then push it to DockerHub using credentials.
                withCredentials([usernamePassword(credentialsId: 'wms_backend_pwd', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh """
                    docker login --username $USERNAME --password $PASSWORD
                    docker build -t $USERNAME/wms_frontend:${env.BUILD_NUMBER} .
                    docker push $USERNAME/wms_frontend:${env.BUILD_NUMBER}
                    docker image prune -f
                    """
                }
                        echo '========== Continuous Integration ends here =========='
                    }
                }
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
