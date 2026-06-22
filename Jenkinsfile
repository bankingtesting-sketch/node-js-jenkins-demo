pipeline{
    agent any
    stages{
        stage("Install"){
            steps{
                sh "npm install"
            }
        }
        stage("Test"){
            steps{
                sh "npm test"   

            }
        }

        tage("Build"){
            steps{
                sh "npm run build"
            }
        }
    }
}