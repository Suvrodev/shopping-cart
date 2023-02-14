////Phone work
const PhoneMinusButton = document.getElementById("phn_minus_btn");
const PhonePlushButton = document.getElementById("phn_plush_btn");
const PhoneItemInput = document.getElementById("phn_item_input");
const phonePrice=document.getElementById('phn_price');

////Case work
const CaseMinusButton = document.getElementById("case_minus_btn");
const CasePlushButton = document.getElementById("case_plush_btn");
const CaseItemInput = document.getElementById("case_item_input");
const CasePrice=document.getElementById('cse_price');

const SUBTOTAL=document.getElementById('subtotalid');
const TAX=document.getElementById('taxid');
TAX.innerText="0.1";
const TOTAL=document.getElementById('totalid');



function ShowPriceALL(PhonePrice1,CasePrice2){
    const Subtotal=PhonePrice1+CasePrice2;
    SUBTOTAL.innerText=Subtotal;
    const Total=(Subtotal+(Subtotal*0.1)/100);
    TOTAL.innerText=Total;
}

PhoneMinusButton.addEventListener("click", function () {
  const ItemString = PhoneItemInput.value;
  const ItemValue = parseInt(ItemString);
  const NewItemValue = ItemValue - 1;

  const PreviousPriceString=phonePrice.innerText;
  const PreviousPrice=parseFloat(PreviousPriceString);
  const NewPrice=PreviousPrice-1219;

  if (NewItemValue >= 0) {
    PhoneItemInput.value = NewItemValue;
    phonePrice.innerText=NewPrice;

    ////FUNCTION WORK START
    const caseprice=parseFloat(CasePrice.innerText);
    ShowPriceALL(NewPrice,caseprice);
    ////FUNCTION WORK END

  } else {
  }
  console.log(NewItemValue);
});

PhonePlushButton.addEventListener("click", function () {
  const ItemString = PhoneItemInput.value;
  const ItemValue = parseInt(ItemString);
  const NewItemValue = ItemValue + 1;

  const PreviousPriceString=phonePrice.innerText;
  const PreviousPrice=parseFloat(PreviousPriceString);
  const NewPrice=1219*NewItemValue;

  if (NewItemValue <= 10) {
    PhoneItemInput.value = NewItemValue;
    phonePrice.innerText=NewPrice;

      ////FUNCTION WORK START
      const caseprice=parseFloat(CasePrice.innerText);
      ShowPriceALL(NewPrice,caseprice);
      ////FUNCTION WORK END

  } else {
  }
  console.log(NewItemValue);
});





////Case work


CaseMinusButton.addEventListener("click", function () {
    const ItemString = CaseItemInput.value;
    const ItemValue = parseInt(ItemString);
    const NewItemValue = ItemValue - 1;

    const PreviousPriceString=CasePrice.innerText;
    const PreviousPrice=parseFloat(PreviousPriceString);
    const NewPrice=PreviousPrice-59;

    console.log("Previous Price: "+PreviousPrice);
    console.log("New Item Number: "+NewItemValue);
    console.log("New Price: "+NewPrice)

    if (NewItemValue >= 0) {
      CaseItemInput.value = NewItemValue;
      CasePrice.innerText=NewPrice;

     ////FUNCTION WORK START
     const iphoneprice=parseFloat(phonePrice.innerText);
     ShowPriceALL(NewPrice,iphoneprice);
     ////FUNCTION WORK END
     
    } else {
    }
    console.log(NewItemValue);
  });
  

CasePlushButton.addEventListener("click", function () {
    const ItemString = CaseItemInput.value;
    const ItemValue = parseInt(ItemString);
    const NewItemValue = ItemValue + 1;

    const PreviousPriceString=CasePrice.innerText;
    const PreviousPrice=parseFloat(PreviousPriceString);
    const NewPrice=59*NewItemValue;
    console.log("New Price: "+NewPrice)

    if (NewItemValue <= 10) {
        CaseItemInput.value = NewItemValue;
        CasePrice.innerText=NewPrice;

      ////FUNCTION WORK START
      const iphoneprice=parseFloat(phonePrice.innerText);
      ShowPriceALL(NewPrice,iphoneprice);
      ////FUNCTION WORK END
    } else {
    }
    console.log(NewItemValue);
  });
