---
slug: jamstack-nedir-104
title: JAMstack Nedir?
author: Güngör Öztürk
username: gungorozturk
banner: https://miro.medium.com/max/1050/1*viokns2FYNeWHjlY9VnQkw.jpeg
date: November 16, 2020
---

İnsanoğlunun gelişiminin temel dinamiklerinden olan daha iyiye ulaşma arzusu hayatın geri kalanında olduğu gibi bilgisayar bilimlerinde de kendini her daim göstermiştir. Bu arzu sayesinde kullandığımız teknolojiler ve araçlar her geçen gün daha verimli bir hale getirilmiş böylece durmayan bir ilerleyiş meydana gelmiştir. Bu yazıda web teknolojilerinde bu durum için çok iyi bir örnek teşkil edeceğini düşündüğüm JAMstack kavramını ele alacağım. Çünkü bu kavramın ortaya çıkışı da web geliştiricilerinin nasıl daha hızlı ve güvenli web siteleri ortaya koyarız sorusuna cevap aramasına dayanıyor.

JAMstack kelimesi JavaScript, API ve Markup kelimelerinin baş harflerinden oluşuyor çünkü JAMstack aslında bu üç temel taşın üzerine kurulu. Peki JAMstack nedir? Kısaca web sunucu yönetimini minimuma indirmek, daha güvenli ve hızlı çalışan web siteleri üretmek için statik web sayfaları üretimine dayanan modern bir yaklaşım olarak özetlenebilir. Geleneksel front-end yaklaşımlarında kullanıcı her istek attığında (örneğin sayfa değiştirdiğinde) sayfa yeniden render edilip sunucu bunu kullanıcıya yollar yani daha basit bir dille her hamlede arka planda haberleşmeler gerçekleşir. JAMstack’de ise sunucunun kullanıcıya bir şeyler döndürmek için arka tarafta bir şeylerin render edilmesine gerek yoktur çünkü sunucu halihazırda render edilmiş statik sayfayı barındırıyor böylece sunucu direkt CDN’den sayfayı gönderebiliyor.

![resim](https://dinarys.com/photos/7/jam-dinarys.png)

Peki bu statik sayfalar nasıl oluşturuluyor? Next.js, Gatsby.js gibi SSG (Static Site Generator)’ler kullanarak React.js ile kodladığımız projemizi static export alıyoruz sonra bu statik dosyaları sunucuya atarak sitemizi ayaklandırabiliyoruz. Kullanıcıya ulaşan son sayfalar statik olduğu halde sayfanı herhangi bir yerinde API ile iletişim kurarak istediğimiz veriyi yine dinamik olarak alabiliriz ancak bu SSR (Server Side Rendering) ile karıştırılmamalıdır.

Birçok olumlu yönünün yanı sıra JAMstack her ihtiyaca uygun bir yaklaşım değil maalesef. Özellikle sayfa sayısı çok fazla olan ve sunucuyla haberleşme ihtiyacı fazla olan siteler için (örneğin haber siteleri), render süresinin uzayacak olması sebebiyle, hiç uygun olmayacağını söyleyebiliriz.

Bu yaklaşımla site geliştirmek için kullanılabilecek birçok framework ve araç var bunları Tıpkı diğer bütün yazılım kavramlarında olduğu gibi JAMstack’i de anlamanın en iyi yolu bu yaklaşımla bir proje geliştirmek. Bu yazıda kısaca JAMstack’i tanıdık ancak daha fazlasına ulaşmak ve bu şekilde bir proje geliştirmek isterseniz benim de çok faydalandığım Adem İlter youtube kanalındaki Next.js derslerine göz atabilirsiniz.


