pipeline {

    agent any

    stages {

        stage('Build') {

            steps {

                sh '''
                docker build \
                -t node-demo:v1 .
                '''
            }

        }

        stage('Run') {

            steps {

                sh '''
                docker rm -f node-demo || true

                docker run \
                -d \
                --name node-demo \
                -p 3000:3000 \
                node-demo:v1
                '''
            }

        }

    }

}