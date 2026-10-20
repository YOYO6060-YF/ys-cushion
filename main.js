(function(){var C=window.YS_CONFIG,f=document.getElementById('f'),t=document.getElementById('tot');
function upd(){t.textContent=(C.PRICE*+f.qty.value)+' ₪';}f.qty.onchange=upd;upd();
if(C.PAYMENT_LINK){var p=document.getElementById('pay');p.href=C.PAYMENT_LINK;p.hidden=false;}
f.onsubmit=function(e){e.preventDefault();var q=+f.qty.value;
var m='שלום, אני רוצה להזמין כרית YS\nשם: '+f.name.value+'\nטלפון: '+f.phone.value+'\nכתובת: '+f.address.value+', '+f.city.value+'\nכמות: '+q+'\nסה"כ: '+(q*C.PRICE)+' ₪';
if(window.fbq)fbq('track','Lead');window.open('https://wa.me/'+C.WHATSAPP_NUMBER+'?text='+encodeURIComponent(m),'_blank');};})();
