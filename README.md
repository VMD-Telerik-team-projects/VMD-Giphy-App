# VMD-Giphy-App
First team project
>Giphy API:

Name: VMD Giphy App

API Key: 5GYey1g40Kqb3LgSi65mxgNVU8vQzqyb

Endpoints: https://developers.giphy.com/docs/api/endpoint#search


>## **Functional Requirements**

 Each requirement is categorized in one of three categories – must, should or could.

· Must requirements have the highest priority and should be addressed first.

· Should requirements have medium priority and should be addressed after all or most must requirements have been implemented and tested.

· Could requirements should be left for last.

Any additional features are welcome, if you have covered all the listed requirements below.

>### **Must Requirements**

The application must support the following functionalities:

>**Display Trending Gifs**

The application must have a display trending gifs functionality, that will allow the user to see the top trending gifs. You should use the trending endpoint with your api_key. You can limit the received gifs, by using the limit parameter.

>**Search Gifs**

The application must have a search gifs functionality, that will allow the user to search gifs by a given query. You should use the search endpoint with your api_key and a search query – q, provided by the user. You can limit the received gifs, by using the limit parameter.

>**Display Gif Details**

The application must have a display gif details functionality, that will allow the user to see a given gif’s detailed information like uploaded user’s username. You should use the get-gif-by-id endpoint with your api_key and the desired gif’s id – gif_id.

>**Upload Gif**

The application should have an upload gif functionality, that will allow the user to upload a gif from his file system. You should use the upload endpoint with POST request, containing your api_key and in the request’s body you should send a file object as a form data. You can see the uploaded gifs in your Giphy Channel.

>### **Should Requirements**

This application should support the following functionalities:

>**Display Uploaded Gifs**

The application should have a display uploaded gifs functionality, that will allow the user to see his uploaded gifs. You can do this by storing the ids of the uploaded gifs in the browser’s local storage and then use the get-gifs-by-id endpoint with your api_key and the desired ids, separated by commas – ids.

>**Favorite Gif**

The application should have a favorite gif functionality, that will allow the user to make a gif his favorite and display it somewhere in the app. If the user hasn’t chosen a favorite gif yet, he should be notified, and a random gif will be shown as a favorite. You can do this by storing the chosen favorite gif’s id in the browser’s local storage and then use the get-gif-by-id endpoint and if the user has no favorite gif yet, you can use the random endpoint.

>## **General Requirements**

· You must use Native DOM API for DOM manipulations.

· You must use Git to keep your source code and for team collaboration.

· You must use GitHubs issue tracking system.

· You must use ESLint to write consistently styled code.

· You must use modules and they should be single-responsible.

· You must document your code explicitly following the JSDoc standard.

· You must use correct naming and write clean, self-documenting code.

· You must have usable user interface.

· You must use the latest features of ECMAScript.

· You could use external libraries such as Bootstrap, Materialize or other to style your project

· External libraries such as jQuery UI, Kendo UI or other for custom controls are allowed.

>## **Teamwork Guidelines**

Refer to the teamwork guidelines document found along with the project requirements.

>## **Give Feedback about Your Teammate**

You will be invited to provide feedback about all your teammates, their attitude about this project, their technical skills, their team working skills, their contributions to the project, etc. The feedback is an important part of the project evaluation, so take it seriously and be honest.
