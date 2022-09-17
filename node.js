// Questions
// 1 Js nima?
// Javobi: Js bu dasturlash tillarining biri
// 2 Js ning vaifasi?
// Javobi: asosiy vazifasi bu jonlantirish ya'ni html va cssni interaktiv holatga keltiradi
// 3 Data typelar nechta va nechi xil?
// Javob:Data typelar 8 ta bo'ladi va 2turga bo'linadi. Number, string, boolean,null,symboll, undefined, BigInt=> primitive, Object=> noprimitive
// Number => raqamlar
// String=>"",'',``
// Boolean=> true , false
// Symboll=> id larga asoslangan data typelar turi
// Undefined=> biron bir o'zgaruvchi ochilgan ammo qiymat berilmagan
// Null=> hech narsa yo'q
// BigInt=>2^53-1 dan -2^53-1 gacha
// 4 Veraybllar nechi xil va ularning asosiy vazifalari?
// uch xil: var let const
// Var=> global scope, edit qilsa bo'ladi, bir xil key bersa ham bo'ladi hoisting bo'ladi
// Let=> block scope, edit qilsa bo'ladi, bir xil key bersa bo'lmidi hoisting bo'lmidi
// Const=> block scope, edit qilsa bo'lmidi, bir xil key bersa bo'lmidi hoisting bo'lmidi
// 5 Number parsInt('') va Number.parseFloat('') farqlari?
// Number parsInt=> stringdan numberga o'tkazib beradi yaxlitlab
// Number.parseFloat stringdan numberga o'tkizib beradi asl qaytaradi
// 6 Number.IsIntager nima va u qanday javob qaytaradi?
// berilgan son butunmi yoki yoqmi bilib booleanda qaytaradi
// 7 Number.ToFixed nima vazifani bajaradi?
// Javobi:masalan x=4.323 va x.ToFixed(2), natija 4.32 string holatida chiqadi
// 8 Number.IsNan?
// agar typeof number bolsa true, bolmasa false qaytaradi
// 9 Alert va Prompt nima?
// Alert ogohlantirish, prompt ma'lumot olish uchun
// 10 Math methodlaridan kamida 10 ta sanab izohlab bering!
// pow,sqrt,cbrt,ceil,floor,round,random,abs
// 11 Math.Floor, Math.ceil va Math.round farqlari?
// Math.Floor=> 4.2 natija 4
// Math.Ceil=> 4.2 natija 5
// Math.round=> 4.2 natija 4 sababi qoldiq 5 dan katta bolsa songa +1
// 12 Conditional Operatorlarni sanab bering va izohlang!
// == tengi
// === datatypelari ham tengmi
// != teng emas
// !== datatypelari ham teng emas
// >= katta yoki teng
// <= kichik yoki teng
// 13 == vs ===?
// == tengi
// === datatypelari ham tengmi
// 14 Agar true && true shunday yozilsa console ga nima javob chiqadi?
// true
// 15 Agar true && false yozilsachi?
// false
// 16! nima vazifani bajaradi?
// teskarisiga o'girib beradi
// 17 Dasturlashda sonlar nechiga teng bo'lsa juft yoki toq bo'ldi?
// 0-juft 1-toq
// 18 String nima?
// js data typelaridan biri
// 19 String necha xil usulda yoziladi?
// "",'',``
// 20 String methodlaridan kamida 10 ta sanab bering va izohlang!
// .toLowerCase(), .toUpperCase(), .replace(), .indexOf(), .lastIndexOf(), .startsWith(), .endsWith(), .includes(), .repeat(), .substring(), .substr(), .match(), .search(), .padEnd(), .padStart(), .concat(), .split(), .trim(), slice()
// 21 Includes nechinchi yildan kirib kelgan va uning vazifasi?
// Includes EcmaScript 6 yani 2015 yilda kirib kelgan, va uning vazifasi masalan biron bir string ozgaruvchini ichida shu .includes methodi ichiga berilgan qiymat bormi yoki yoq. Agar bor bo'lsa true qaytaradi, yo'q bo'lsa false qaytaradi.
// 22 Search nechinchi yildan kirib kelgan va uning vazifasi?
// Search EcmaScript1 yani 1997 yildan kirib kelgan va uning vazifasi osha berilga string biron bir qiymat oxshashlik bormi, agar bolsa birinchi uchraganini indexini qaytaradi, agar yoq bo'lsa -1 qartaradi
// 23 Match nechinchi yildan kirib kelgan va uning vazifasi?
// Match EcmaScript1 yani 1997 yildan kirib kelgan va uning vazifasi hudda search oxshash ammo, natijani array ko'rinishida qaytaradi, va unday oxshashlik bo'lmasa null qaytaradi.
// 24 Regex nima? Regular expression degani  /[0-9]/ sonlarga /[A-Z]/ harflarga (red|green) ranglarga
// 25 Match vs Search vs Includes da qiymat yo'q bo'lsa nima qaytaradi?
// tepada javobi yozilgan
// 26 Stringda qirqib olish uchun nechta method bor va ularni sanab bering?
// Slice vs Substr vs Substring
// 27 Slice vs Substr vs Substring farqlari?
// .slice() qaysi indexdan boshlab qaysi indexgacha, .substring() hudda slicega oxshash lekin birinchi berilga qiymat ikkinchisidan katta bo'sa ularning o'rni almashib qoladi, .substr() qaysi indexda boshlab, nechata.
// 28 Funksiyalar necha xil bo'ladi va qaysilar?
// Functionlar uch xil boladi: Declaration, Expression, Arrow
// 29 3 ta funksiyaning bir birida 3 ta farqini sanab bering!
// name chaqirilishida, hoisting declorationda ishlaydi, this arrow functionda ishlamaydi
// 30 If else va switch case farqi?
// If da shart berish mumkin, caselarda esa shart berib bo'lmaydi, va yana bir farqi if statementda hech qaysi shartga to'g'ri kelmasa else ni ichidagi shartni bajaradi, switch case da esa default ni ichidagi shartni bajaradi.
// 31 if else va ternory operation farqi?
// If else da else ni yozmasa ham boladi lekin tenary opeartoinda else ni yani (:) yozish shart
// 32 Default va break nima?
// default bu switch ning else yani default qiymati, yani hech qaysi shartga to'g'ri kemasa default ni chiidagi shart bajariladi, break bu buzish yani programmani tohtatib chiqib ketish.
// 33 for loop nima va uning har bir berilgan qiymati izohlansin!
// - Birinchi qiyamti bu boshlanish qiyamti, ikkinchi qiymati nechchi gacham, uchinchi qiymat osha qiyatgacham oschib borsin yoki kamayib borsin.
// 34 While va do while farqlari?
// Javobi:While birinchi tekshiradi keyin bajaradi, do While birinchi bajaradi keyin tekshiradi
// 35 While va for loop farqlari?!
// Javobi:While da o'zgarubchi tashqarida ochiladi, for loopda o'zgaruvchi ichida ochiladi
// 36 Array va massivning farqi va nima vazifani bajaradi?
// Javobi:Ikkalovi bir. Array(massiv)=> barcha data typelarni o'z ichiga saqlovchi ombor.
// 37 Array methodlaridan kamida 10 ta sanab bering?
// Push=> oxiriga qo'shib beradi, Pop=> oxiridan olib tashlidi, Shift=> boshidan olib tashlidi, Unshift=> boshiga qo'shib beradi
// Slice=> qirqib beradi faqat qaysi indexdan qaysi indexgacha va asosiy massivni kesib oladi
// Splice=> qirqib beradi faqat qaysi indexdan nechta va asosiy massivga ta'sir qilmidi
// filter => arraydan kiritilgan shart boyicha elementlarni saralab olib hammasini qaytaradi, loop vazifasini bajaradi, return ga qaytadi.
// reduce => arrayda arifmetik amallar bajarib, arraydagi sonlar yigindisini topib beradi
// forEach => huddi map methodiga oxshidi, lekin return qaytarmidi, birga bir kopiya for loopga(qiymat bermaydi lekin bajaradi)
// Map => for loopga o'xshidi va qiymat beradi va shu bilan birga bajaradi
// find=>arraydan kiritilgan shart bo'yicha birinchi to'g'ri kelganini chiqazib beradi
// findIndex => kiritlgan shart togri bolsa, array ichidan birinchi shartga mos kelgan emelentni indexini chiqazib beradi
// includes => arrayning ichida kiritiladigan qiymat bolsa true bolmasa false qaytaradi
// 38 ForEach va Map farqlari?!
// ForEach=> qiymat bermaydi lekin bajaradi va Map=>for loopga o'xshidi va qiymat beradi va shu bilan birga bajaradi
// 39 Find vs Filter?!
// Find=> arraydan kiritilgan shart bo'yicha birinchi to'g'ri kelganini chiqazib beradi va filter => arraydan kiritilgan shart boyicha elementlarni saralab olib hammasini qaytaradi, loop vazifasini bajaradi, return ga qaytadi.
// 40 Slice vs Splice?
// Slice=> qirqib beradi faqat qaysi indexdan qaysi indexgacha va asosiy massivni kesib oladi
// Splice=> qirqib beradi faqat qaysi indexdan nechta va asosiy massivga ta'sir qilmidi
// 41 Split vs join?
// Split=>stringdan arrayga, join=> arraydan stringga
// 42 Stick va hip nima va ular qaysi datatypelarni ajratib oladi?
// Stick=> primitivlar hip=> nopritivlar
// 43 Scope nima va u necha turga bo'linadi?
// 3 turga bo'linadi global function block scope
// 44 Object nima?
// key va valuedan tashkil topgan data type turi
// 45 Objectda add vs edit vs delete vs get izohlab being?!
// 46 Object nomini necha xil yo'l bilan ovosa bo'ladi?
// 2 xil usulda () va []
// 47 Object MEthodlaridan 5 tasini sanab bering va izohlang?
// Keys, values, freeze, entries,FromEntries, seal,this
// 48 Call vs bind vd apply?
// tepadagi objectni pastdagi objectga(function yoki array farqi yoq)bog'lab qoyadi
// Apply+(), bind+[], call
// 49 OOP nima va uning yoyma shakli?
//  OOP= object oriental modal
// 50 Class nima?
// classlar => Es6 dan 2015 yildan qo'shilagn(boshqa dasturchilar qiynalmasligi tufayli) objectni shablonini yaratib beradi
// 51 ?. nima?
// ?. ==> masivdan undefined keb qolsa xatolik bervormaslik uchun
// Agar .? bo'lmaganda [] proectimizdagi undefinedlar error bermasligi uchun
// 52 Destructor nima?
// Destructor==> object yoki arrayni ichidagi qiymatlarni bitta qilib olish
// 53 extend vs super vs constructor nima vazifani bajaradi?
// extend voris olish
// super tepadan nomini chaqirib olish
// 54 Local storage nima?
// Brauzer xotirasi
// 55 LocalStorage.removeItem('token) nima?
// biron bir keyni ochirib olish
// 56 LocalStorage.satItem('token', qiymat) nima?
// key yaratish uchun
// 57 LocalStorage.getItem() nima?
// biron bir kiyni ma'lumotini olish uchun
// 58 LocalStorage.clear() nima?
// hammasini o'chiradi
// 59 setTimeout qanday vazifani bajaradi?
// vaqtni kechiktirish
// 60 sinxrom va asinxrom farqlari?
// Sinxrom==>> bu ma'lumot biri ikkinchisini kelishini kutib turadi keyin ishga tushadi
// Asinxrom bo'lsa==>>bu ma'lumot biri ikkinchisini kelishini kutib turmaydi bitta ma'lumot keladi va ishlab ketvuradi
// 61 js qaysi turga kiradi?
// Js=> sinxrom
// 62 Callback nima?
// funksiyani qayta yurg'izish uchun
// 63 res vs rej?
// to'g'ri result bosin, notogri ishlasa reject bo'sin
// 64 async vs await?
// ....
// 65 promise nima?
// ....
// 66 Domda class va id nomlari bilan qanday chaqiriladi?
// getElementByClassName=> class, getElementById=>id
// 67 Tag nomi bilan chaqirib olish qanday amalga oshiriladi?
// document.tagnomi yoki hammasini olish uchun quaryselector
// 68 Domda biron bir element yaratib olish qanday qilinadi?
// CreateElement
// 69 Dobbleclick nima?
// 2 marta click ya'ni bosilsa ishlaydi
// 70 Mouseover?
// Mishka borganda biron bir holat bosin
// 71 Mousedown?
// inputga bosib chiqib ketganda bo'ladigan hodisa
// 72 Keypress?
// klaviatura orqali boshqarish
// 73 Responsive funksiya nima?
// biron bir funksiyani ichida boshqa bir funksiyani o'qib olish
// 74 Event Loop izohlab bering?
// ...
// 75 Internal vs external?!
// <script>....</script>=> internal
// <script src=''></script>=> external
// 76 Crud?
// Create, Read, Update, Delete

