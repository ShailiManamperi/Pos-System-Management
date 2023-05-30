const data = "key";
loadData();
function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);
    $('table tbody tr').remove();
    customer_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.customer_id + "</td>" +
            "<td>" + result.customer_name + "</td>" +
            "<td>" + result.customer_address + "</td>" +
            "<td>" + result.customer_contact + "</td>" +
            "</tr>";
        $('tbody').append(row);
    })
};

$("#custTbl").on('click','tr',function(event){
    console.log($(event.target).text());
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let address = $(this).children().eq(2).text();
    let contact = $(this).children().eq(3).text();

    $("#Cid").val(id);
    $("#custname").val(name);
    $("#address").val(address);
    $("#contact").val(contact);
});

$('#btnsave').on('click',(event) =>{
    let customer_id = $('#Cid').val();
    let customer_name = $('#custname').val();
    let customer_address = $('#address').val();
    let customer_contact = $('#contact').val();

    console.log(customer_id+" "+customer_name+" "+customer_contact+" "+customer_address);

    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    var obj = {
        customer_id: customer_id,
        customer_name: customer_name,
        customer_address: customer_address,
        customer_contact: customer_contact
    }

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data, JSON.stringify(data_arr));
    loadData();
});

//update customer
$("#btnupdate").on('click',(event)=>{
    let customer_id = $('#Cid').val();
    let pre_data = localStorage.getItem(data);
    let customer_data_arr =JSON.parse(pre_data);

    let index = customer_data_arr.findIndex(value => value.customer_id === customer_id);
    console.log(index);
    console.log(customer_data_arr[index]);
    if (index > -1){
        console.log(customer_data_arr[index]);
        customer_data_arr[index].customer_id = $("#Cid").val();
        customer_data_arr[index].customer_name = $("#custname").val();
        customer_data_arr[index].customer_address = $("#address").val();
        customer_data_arr[index].customer_contact = $("#contact").val();
        console.log(customer_data_arr[index].customer_contact);
        localStorage.setItem(data,JSON.stringify(customer_data_arr));
        loadData();
    }
});

$("#btndelete").on("click",(event)=>{
    let id = $("#Cid").val();
    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value.customer_id === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})
