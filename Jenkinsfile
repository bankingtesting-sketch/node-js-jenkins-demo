pipeline {

    agent any

    stages {

        stage('Build Docker Image') {

            steps {

                sh '''
                docker build \
                -t node-demo:v1 .
                '''
            }

        }

    }

}