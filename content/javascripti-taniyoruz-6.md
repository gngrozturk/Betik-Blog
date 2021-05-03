---
slug: javascripti-taniyoruz-6
title: JavaScript'i Tanıyoruz
author: Güngör Öztürk
username: gungorozturk
banner: https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_960_720.jpg
date: April 27, 2020
---

Herkese merhaba bugün yazılım dünyasındaki yeri ve önemi gittikçe artmakta olan JavaScript dilini daha yakından tanıyacak ve ilk JavaScript kodumuzu yazacağız.

JavaScript 1995 yılında Netscape'de bir mühendis olan Brendan Eich tarafından oluşturulmuş ve 1996 yılının başlarında kullanıma açılmıştır. Geliştirilirken adının “Mocha” olarak geçmesine rağmen eylül 1995 tarihine kadar resmi olarak “Livescript” ismiyle isimlendirilmiştir ancak bir süre sonra aralarında hemen hemen hiç benzerlik olmamasına rağmen, Java dilinin popülerliğinden faydalanmak için, yola “JavaScript” ismi ile devam edilmiştir. Bu olay o zamandan beri iki dil arasında karışıklıklığa neden olmaktadır. Ancak günümüzde java ile alakalı araştırma yaparken dahi karşımıza JavaScript’e dair bir şeylerin de çıkmasına bakılırsa bu reklam stratejisi işe yaramış görünüyor.

### Java ile JavaScript Farklıdır !

- JavaScript internet browser tarafından yorumlanır, derlenmez ancak Java’da derlenmiş bytecode, JVM’de çalıştırılır.

- Her ikisi de nesneye yönelik programlama dilleridir ancak JavaScript’te nesne tipleri arasında farklılık yoktur. Herhangi bir nesneye yeni özellik ve metotlar dinamik olarak eklenir. Nesneye yönelik teorinin miras alma (inheritance) özelliği prototip mekanizmasıyla gerçekleştirilir. Java’da ise Sınıf ve sınıf örneklerine özellik ve metotlar dinamik olarak eklenemez. Nesneler çeşitli sınıflara ayrılmıştır ve miras alma mekanizması, sınıf hiyerarşisi sayesinde gerçekleştirilir.

- Java’da değişken tip bildirimi zorunlu iken JavaScript’te böyle bir bildirim mekanizması yoktur.

- Java’da nesne referansları derleme zamanında (compile time) kontrol edilirken JavaScript’te çalışma zamanında (run time) kontrol edilir. Yani Java’da statik bağlama mekanizması kullanılırken JavaScript’te dinamik bağlama mekanizması kullanılır.

1996 yılının kasım ayında Netscape firması JavaScript'in endüstri standardı olarak belirlenmesi amacıyla Ecma International firmasına başvuruda bulunduğunu ilan etti. Bunun sonucunda standardize edilen sürüm ECMAScript olarak isimlendirildi ve 1997 yılının haziran ayında Ecma International, ECMA-262 belirtiminin ilk sürümünü yayımladı.

JavaScript, yaygın olarak web tarayıcılarında, masaüstü uygulamalarında ve mobil uygulamalarda kullanılmakta olan bir script dilidir. JavaScript ile yazılan istemci (client) tarafı scriptler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır. JavaScript, Node.js v.b. platformlar sayesinde sunucu tarafında da yaygın olarak kullanılmaktadır. JavaScript bir çok framework ve kütüphanesiyle kullanıcı arayüzü geliştiricilerinin işini kolaylaştırmaktadır.

### HTML İçinde JavaScript Kullanımı !

HTML5 standart tanımlaması ile javascript kodları sadece script etiketleri arasına yazılmaktadır.

```javascript
<script>

//Kodlar burada olacak

</script>
```

### Harici JavaScript Dosyasını HTML Belgesine Bağlama

Dahili kullanım her zaman kullanışlı olmayacağı için büyük projelerde JavaScript kodları ayrı bir dosyada yazılır. Dahili kullanımda olduğu gibi yine script etiketleri kullanılmaktadır. Burada dikkat edilmesi gerek kısım ise script etiketinin “src” özelliğine harici olarak yüklenmek istenen javascript dosyası yolu yazılmalıdır.

```
<script src="ornek-dosya.js"></script>
```

### JavaScript’teYorum Satırı Kullanımı

Kodlarınızı yazarken, yorum veya açıklama yapmak için kullanılır. Kodun çalışmasını etkilemez. İlerleyen dönemde kodu yazan kişi veya okuyan başka birisi için kodun anlaşılırlığına katkıda bulunur. JavaScript programlama dilinde diğer C tabanlı dillerde olduğu gibi tek satırlık yorum yapılacaksa // işaretlerinden sonra tek satır yorum yapılabilir. Birden fazla satır yorum olarak yapılacaksa / / sembolleri arasında istenilen satır kadar yorum bırakılabilir.

Artık JavaScript’in nasıl ortaya çıktığını, hangi alanlarda ve nasıl kullanıldığını biliyoruz, şimdi gelin hep birlikte web konsolumuzda ilk JavaScript kodumuzu yazalım.Web konsolu içinde bulunduğumuz sayfanın yapısal içeriğini gösterir ve o an yazdığınız JavaScript kodlarınızı çalıştırabileceğiniz bir komut satırı içerir. Konsolunuzu açmak için Ctrl+Shift+K kısayolunu kullanabilirsiniz.

![resim](https://i.hizliresim.com/b4us16.png)

(Kırmızı çerçeve içindeki alan kodumuzu yazacağımız komut satırımız.)

Konsola alert(“Bastırılmak istenen metin”); komutuyla tırnak arasında yazdığımız metni bir alert (uyarı) olarak sayfaya getirtecek ve ilk JavaScript kodumuzu yazmış olacağız.

![resim](https://i.hizliresim.com/dsh565.PNG)

![resim](https://i.hizliresim.com/1hdft8.PNG)

Web konsolu basit JavaScript kodlarınızı çalıştırmak için iyi bir araçtır ancak daha kompleks JavaScript kodları çalıştırmak istediginizde ise teknik olarak mümkün olsa da web konsolu kullanışlı değildir ve yazdığınız kod örneklerini kaydedemez. Bu nedenle projelerimizde kodlarımızı yazarken text editor kullanacağız. Bu yazıda kullanımı gittikçe yaygınlaşan JavaScipt’i kısaca tanıdık ve ilk JavaScript kodumuzu yazdık. Zaman ayırıp okuduğunuz için teşekkür ederim.

Kaynaklar:

[Mozilla Docs](https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Introduction#Hello_world "Mozilla Docs")

[Js Tarihçe](https://tr.wikipedia.org/wiki/JavaScript#Tarih%C3%A7esi "Js Tarihçe")
