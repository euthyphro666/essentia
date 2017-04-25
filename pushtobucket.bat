@Echo off

:: Verify this address with local google app engine sdk path
C:\WINDOWS\system32\cmd.exe /k ""C:\Users\Josh\AppData\Local\Google\Cloud SDK\cloud_env.bat""

gsutil rsync -rd -x \.git . gs://joshhess.info
