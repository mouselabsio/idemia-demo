## Idemia demo app

I've included the target directories in this repo since /backend/target contains the necessary executable uber-jar
of both the front and backend modules. 

###### To run the app:

```
        java -jar backend/target/idemia-demo-backend-0.0.1-SNAPSHOT.jar 
```

Which will launch tomcat running on port 8081.

###### From your browser:
```
         http://localhost:8081
```

###### Record generation: 
`UserRecordControllerTest` in its travels generates user records with random data. The project can be imported into an
IDE (or use maven et al from the command line) and the test can be run to generate user records. 

###### File Store: 
The root of the file store is a directory named "userrecords" which is created in the home directory of the user who launches the process. File names are of the form `[UUID].json`.

###### Documentation:
Almost all multi-line "/* ... */" comments are directed to the reviewer to explain parts of the code or my thoughts behind it. Regular java line "//" comments and javadocs should be viewed as regular ship-able comments. 

###### Oops:
I goofed a bit and got server side uuid generation in my head from the beginning. Since it was going to be a fair bit to unravel it once I noticed I left things that way. The consequence is that the user doesn't enter an "ID" on the new-record form.

###### Thanks!
