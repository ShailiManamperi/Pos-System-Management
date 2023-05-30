const data1 = "key1";
 loadData();
function loadData() {
    let pre_data = localStorage.getItem(data1);
    console.log(pre_data);
    let item_data_arr = JSON.parse(pre_data);
    console.log(item_data_arr);
    $('table tbody tr').remove();
    item_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.item_id + "</td>" +
            "<td>" + result.item_desc + "</td>" +
            "<td>" + result.item_price + "</td>" +
            "<td>" + result.item_qty + "</td>" +
            "</tr>";
        $('tbody').append(row);
    })
};

$("#ItemTbl").on('click','tr',function(event){
    console.log($(event.target).text());
    let id = $(this).children().eq(0).text();
    let desc = $(this).children().eq(1).text();
    let price = $(this).children().eq(2).text();
    let qty = $(this).children().eq(3).text();

    $("#Iid").val(id);
    $("#ItemDesc").val(desc);
    $("#UPrice").val(price);
    $("#Qty").val(qty);
});

$('#btnsave1').on('click',(event) =>{
    console.log("save btn");
    let item_id = $('#Iid').val();
    let item_desc = $('#ItemDesc').val();
    let item_price = $('#UPrice').val();
    let item_qty = $('#Qty').val();

    console.log(item_id+" "+item_desc+" "+item_price+" "+item_qty);

    let pre_data = localStorage.getItem(data1);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    var obj = {
        item_id: item_id,
        item_desc: item_desc,
        item_price: item_price,
        item_qty: item_qty
    }

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data1, JSON.stringify(data_arr));
    loadData();
})
//update customer
$("#btnupdate").on('click',(event)=>{

    //console.log($('#Cid').val());
    let item_id = $('#Iid').val();
    let pre_data = localStorage.getItem(data1);
    let item_data_arr =JSON.parse(pre_data);

    let index = item_data_arr.findIndex(value => value.item_id === item_id);
    console.log(index);
    console.log(item_data_arr[index]);
    if (index > -1){
        console.log(item_data_arr[index]);
        item_data_arr[index].item_id = $("#Cid").val();
        item_data_arr[index].item_desc = $("#custname").val();
        item_data_arr[index].item_price = $("#address").val();
        item_data_arr[index].item_qty = $("#contact").val();
        console.log(item_data_arr[index].item_price);
        localStorage.setItem(data,JSON.stringify(item_data_arr));
        loadData();

    }
});

$("#btndelete").on("click",(event)=>{

    let id = $("#Iid").val();

    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value.item_id === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})
