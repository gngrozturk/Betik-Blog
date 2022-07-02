---
slug: turing-makineleri-110
title: Turing Makineleri
author: Güngör Öztürk
username: gungorozturk
banner: https://miro.medium.com/max/2304/1*VjC2uQuk8IR79G_09i0Otw.png
date: January 11, 2021
---

“Alan Turing ve Bilgisayar Bilimleri” başlıklı yazımda bilgisayar bilimlerinin temelini oluşturan çalışmalara imza atan Alan M.Turing’in ilham verici hayatını ele almıştım. Bu yazımda da ileri sürdüğü “hesaplanabilir herhangi bir şeyi hesaplayabilen evrensel bir makine” fikrinden yani Turing makinesinden bahsedeceğim.

### Turing Makinesi Nedir?

Turing makinesi 1936 yılında Alan Turing tarafından düşünülmüş hesaplanabilir herhangi bir şeyi hesaplayan, ne kadar karmaşık olduğu fark etmeksizin herhangi bir bilgisayar algoritmasını simüle edebilen soyut bir makinedir. Yani aslında gerçek bir makine değil, matematiksel bir model, bir kavramdır.

Bu makine temelde yan yana dizilmiş sonsuz sayıda hücrenin oluşturduğu bir bant, makinenin mevcut durumunu hafızasında tutan bir durum registerı ve bu bantta gezip hücrelerde bazı işlemler yapabilen kafadan oluşuyor. Banttaki hücreler genellikle başta boş olmakla birlikte bu hücrelere 0, 1 veya “boş” değeri işlenebilir. Herhangi bir zamanda herhangi bir hücrenin üzerinde bulunan kafa kısmı, altında bulunan hücredeki sembolü okuma, yeni bir sembol yazarak veya sembolü silerek düzenleme yapma ve bantın hareketi sonucu hücreler arasında gezinme işlemlerini gerçekleştirir.

Hadi bu sözel ifadeleri pekiştirmek için bit çevirme işlemi yapan bir örnek yapalım. Bu örnekte makine önce kafanın altındaki sembolü okuyacak eğer sembol 1 ise 0 yazacak 0 ise 1 yazacak ve sonra bantı kaydırıp yeni hücreyi okuyacak. Bu durum boş bir hücreyle karşılaşıncaya kadar devam edecek. Boş bir hücreyle karşılaştığında ise eğer durum değişkenleri tablosu ile program tamamlanmaya yönlendiriliyorsa program tamamlanmış olacak ancak böyle bir kontrol yoksa kafa boş hücreye geldiğinde program oku-yaz-bandı kaydır döngüsünün oku adımında takılı kalacak.

![resim](https://i.hizliresim.com/Qwf9Yv.png)

İlk adımda başın altındaki sembol 0, bu yüzden 1 yazılıp bant sağa doğru bir hücre kadar kaydırılacak.


![resim](https://i.hizliresim.com/wXmVbu.png)

Şimdi okunan sembol ise 1, bu yüzden 0 yazılacak ve bant sağa doğru bir hücre kadar kaydırılacak

![resim](https://i.hizliresim.com/DGc6Zk.png)

Bir önceki adımda olduğu gibi gene 1 yerine 0 yazılıp bant kaydırılacak.

![resim](https://i.hizliresim.com/fk6mpn.png)

Ve son olarak boş hücre okunacak böylece program tamamlanacak.

Bu yazıyı günümüz teknolojisine sahip güçlü bilgisayarlarımızda okurken her şey kulağa çok hoş geliyor olsa da. Turing'in bu fikri 1936'da geliştirmiş olması gerçeği durumu çok daha da etkileyici kılıyor.

Bu yazımda Turing makinesini genel hatlarıyla ele alıp çalışma mantığını bir örnek üzerinden anlatmaya çalıştım. Yanlış veya eksik olduğunu düşündüğünüz kısımlar varsa geri bildirimde bulunarak doğrusunu birlikte öğrenmemize katkıda bulunabilirsiniz. Zaman ayırdığınız için teşekkür ederim.

