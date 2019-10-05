console.log('js loaded')

// --------- get data ----------
// db.collection('debate').get().then((snapshot) => {
//    // console.log(snapshot);
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
        
//     });
// })

// --------- add data ----------
var new_data = {
    'question': 'new data123',
    'timestamp': new Date(),
};
db.collection('debate').add(new_data);

// ---------- delete data ----------
//* delete 1
// var data_id = "9kBfcNoTmrs0wHTJFDb8";
// db.collection('debate').doc(data_id).delete();
//* delete all
// id_list.forEach(data_id => {
//     console.log(data_id + 'deleted');
//     db.collection('debate').doc(data_id).delete();
// });
// for(let i = 0; i < 2; i++){
//     console.log('hello');
//     db.collection('debate').doc(id_list[i]).delete();
// }

// --------- query ---------
// db.collection('debate').where('question', '==', 'new data').get().then((snapshot) => {
//     // console.log(snapshot);
//     console.log(snapshot.docs.length);
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//     });
//  });

 // -------- order --------
//  db.collection('debate').orderBy("timestamp","desc").get().then((snapshot) => {
//     // console.log(snapshot);
//     console.log(snapshot.docs.length);
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//     });
//  });

// ------- update -------
var update_id = "1Xw3IN3BC0GrNCVNa0A0"
db.collection('debate').doc(update_id).update({
    'question':'new question'
});