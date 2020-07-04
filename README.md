
1. Sencha Ext JS’in trial olarak kullanabileceğiniz en son versiyonu ile geliştirilecek bir web uygulaması olacak.
2. Ama Classic değil, HTML5 desteği sağlayan Modern Toolkit (API)'i kullanacak ve böylece masaüstü ve tablet’lerin yanısıra telefonlardaki tarayıcılardan da rahatça kullanılabilecek.
 
Ekte sunucuya erişim icin yararlanabileceğiniz doküman yer alıyor. Bu dokümandaki API’leri ve belirtilen test URL’ini kullanarak aşağıdaki fonksiyonları gerçekleştiren bir uygulama geliştirmenizi bekliyor olacağız.
 
1. Ekran: Login ekranı 
  Ekranda Kullanıcı Adı ve Şifre sorulacak ve gerekli temel kontrollerden sonra kullanıcın login olmasını sağlayacak. Sunucudan hata mesajlarını düzgün bir şekilde gösterecek.
 
2. Ekran: Ana ekran 
  Kullanıcı ilk ekran yardımı ile sisteme giriş yaptıktan sonra /Account/GetUserClm aksiyonu ile sunucudan kullanıcı bilgilerini alıp, ekranın uygun bir yerinde gösterecek kullanıcının tam adını gösterecek.
  Aynı zamanda masaüstü, tablet ve telefon tarayıcıları üzerinde düzgün gözükebilecek bir menü yapısı üzerinde gözükebilecek aşağıdaki menü elemanlarını gösterecek:
•	    Ürünler
•	    Kartlar
•	    Üniteler 
 
3. Ekran: Ürünler ekranı
  Bu ekranda HTML5 localStorage API’ı ile local olarak store edilen Product’ların listelenmesini sağlanacak. Product entity’si sunucu üzerinde aşağıdaki şekilde saklanacak özelliklere sahip olacak:
            Name                          Data Type                                             Data Type                 Is Editable                                         Is Mandatory              Default Value             Available Values
        Id                     int (identity)                       not null                No                                  
        Code                 varchar(25)                       not null                Yes                                 Yes
        Description varchar(100)                     not null                Yes                                 Yes
        Status               char(1)                             not null                Yes                                 Yes                   ‘A’                            ‘A’, ‘I’
 
•	İlk başta boş gelecek bu listeyi yönetmek için liste ekranının uygun bir yerinde Tazele (Refresh), Ekle (Add), Düzenle (Edit) ve Sil (Delete) fonksiyonlarını gerçekleştirecek UI elemanları olacak.
  
•	“Sil” fonksiyonuna karşılık gelen UI elemanı "Ürünler ekranı" üzerinde seçili bir ürün kaydı olduğu takdirde aktif olacak. Fonksiyon çağrıldığında kullanıcının bu işlemi gerçekleştirmek isteğinin onayı alındıktan sonra kayıt localStorage’dan silinecek.
 
4. Ekran: Ürün ekranı
  Kullanıcının yukarıda belirtilen bilgilere uygun olarak yeni ürün bilgisini girmesini veya eski bir ürünü düzenlemesini sağlayıp localStorage’a kaydetmesi sağlayacak olan ekran.
•	Status alanının girişi sırasında ‘A’ya karşılık Aktif, ‘I’ya karşılık Pasif değerlerini içeren bir combo’dan seçim yapılması sağlanacak.
•	Kaydet fonksiyonunun tamamlanmasından sonra ürün ekranı kapanıp, "Ürünler ekranı" otomatik olarak tazelenecek.
•	Kullanıcı kaydetme işlemini yapmaktan vazgeçtiği takdirde "Ürünler ekranı”na geri dönecek.
 
  A) "Ürünler ekranı" üzerindeki “Ekle” fonksiyonu ile "Ürün ekranı" açılacak.
      
  B) "Ürünler ekranı" üzerinde seçili bir ürün kaydı olduğu takdirde “Düzenle” fonksiyonuna karşılık gelen UI elemanı aktif olacak. Fonksiyon çağrıldığında “Ürün ekranı” bu seçili ürünün bilgilerini göstererek açılacak.
