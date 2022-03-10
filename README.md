## Requirements:

|             | Required Version | Download        |
| ----------- | ----------- |-------------|
| NodeJS      | v16.x.x       |            | 
| Android NDK   | r22b        |https://github.com/android/ndk/wiki/Unsupported-Downloads|
| Unity   | 2019.4.6f1        |             |
| XCode (iOS Only)   | Latest        |             |

## Limitations:

- Does not work on iOS or Android emulators due to x86 incompatibility 

## Project Setup:

1. Clone and set up the project
2. Copy your Unity project into the unity/{project-name} directory.
3. Copy Build.cs and XCodePostBuild.cs into the /unity/{project-name}/Assets/Scripts/Editor directory.

--- 

1. Open the Unity project, and in Player Settings change the ```Product Name``` to match the name of the XCode project (```ios/{XcodeProjectName}.xcodeproj```).
2. Under other settings, make sure ```Scripting Backend``` is set to ```IL2CPP``` and that ```ARM64``` is checked under  ```Target Architectures```
3. Under other settings, make sure ```Auto Graphics API``` is unchecked and that the list only contains ```OpenGLES3``` and ```OpenGLES2``` in that order.
4. [For iOS] Make sure ```Auto Graphics API``` is checked
