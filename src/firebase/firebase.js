import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCfxTqDAXeO_8dZvk5ZeRc-m3VeUQ1JYxA",
    authDomain: "budget-app-7df04.firebaseapp.com",
    databaseURL: "https://budget-app-7df04.firebaseio.com",
    projectId: "budget-app-7df04",
    storageBucket: "budget-app-7df04.appspot.com",
    messagingSenderId: "365251868880"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//get from database and convert into array
/*database.ref("expenses").once("value").then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
    console.log("test");

}).catch((e) => {
    console.log("Error", e);
});*/

/*database.ref("expenses").push({
    description: "Bill",
    amount: 50000,
    note: "",
    createdAt: 4414234
});*/

/*database.ref().set({
    name: "Kiet Quach",
    age: 25,
    isSingle: false,
    location: {
        city: "Milpitas",
        country: "United States"
    }
}).then(() => {
    console.log("Data is saved.");
}).catch((e) => {
    console.log("This failed.", e);
});*/

/*database.ref("isSingle").remove().then(() => {
    console.log("Removed selected ref");
}).catch((e) => {
    console.log(e);
});*/

/*database.ref().update({
    name: "Mike",
    age: 28,
    job: "Software Developer",
    isSingle: null,
    "location/city": "San Jose"
});*/

//fetch a single time
/*database.ref().once("value").then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((e) => {
    console.log(e);
});*/

//fetch and get data back everytime data changes
/*const onValueChange = database.ref().on("value", (snapshot) => {
    console.log(snapshot.val());
});

//unsubscribe
setTimeout(() => {
database.ref().off("value", onValueChange);
}, 5000);*/
