---
slug: flutteri-taniyalim-12
title: Flutter'ı Tanıyalım 
author: Güngör Öztürk
username: gungorozturk
banner: https://se.ewi.tudelft.nl/desosa2019/chapters/flutter/images/flutter/flutter-logo-sharing.png
date: July 20, 2020
---

Merhaba, özellikle mobil uygulama geliştirme üzerine çalışanların, ilgi duyanların adını sık sık duyduğu Flutter’ı bugün birlikte daha yakından tanıyacağız.

İlk olarak 2015 Dart geliştirici zirvesinde tanıtılan Flutter, Google tarafından geliştirilen tek kod tabanından ios, android gibi farklı platformlara yüksek performanslı mobil uygulamalar geliştirmenizi sağlayan bir yazılım geliştirme kitidir. Flutter mobil uygulamalara ek olarak web teknolojilerinde de kullanılabilir olmasına karşın daha çok mobil uygulama projeleriyle anılmaktadır.

Peki neden Flutter? Google’a göre özetle Flutter, hızlı ve pratik bir şekilde hedef kullanıcı kitleniz için güzel deneyimler sunan uygulamalar üretmenizde size katkıda bulunuyor. Hatta bunu kendi dökümanında “Başlamak için mobil geliştirme deneyimine gerek yoktur. Uygulamalar, Java veya JavaScript gibi bir dillere aşinaysanız tanıdık gelecek olan Dart dilinde yazılmıştır. Nesneye yönelik dillerle ilgili deneyiminiz varsa faydalı olacaktır ancak programcı olmayanlar bile Flutter ile uygulamalar yapmıştır!” şeklinde ifade ediyor. Zira Flutter arayüz tarafında Material Design ve Cupertino ile geliştiricinin görsel açıdan kullanıcıyı ziyadesiyle tatmin edeceği çalışmalar ortaya koymasını sağlıyor.

Flutter uygulamalarının kullanıcı arayüzünün temel yapı taşı widget’lardır. Uygulama bütününde widget’lar hiyerarşik bir kompozisyon oluştururlar. Gerekliliği halinde widgetlar iç içe kullanılır ve bu widget’lar arasında özellikler kalıtımsal olarak aktarılabilir. Birçok küçük ve tek amaçlı widgetlar birleşip çok fonksiyonlu başka widget’ları oluştururlar. Örneğin yaygın olarak kullanılan bir widget olan Container, düzen, boyama, konumlandırma ve boyutlandırmadan sorumlu birkaç widget'tan oluşuyor.

Akıcı bir deneyim sunması, hızlı bir şekilde ortaya güzel uygulamalar çıkarma olanağı sağlaması ve daha birçok özelliğiyle Flutter şuan birçok geliştiricinin ilgisini çekmesinin yanı sıra bu popülerliği giderek artıyor. Ben de çok uzun süre olmasa da Flutter’da birtakım çalışmalar yaptım. Hot reload özelliği sayesinde kodlarken yaptığınız değişiklikleri anında görebiliyor oluşunuz hızlı ve pratik bir şekilde, etkileyici olduğu kadar da kullanışlı uygulamalar çıkarmada gerçekten yardımcı olabiliyor.

Eğer siz de mobil uygulama geliştirmek istiyor ancak nasıl bir yol izleyeceğiniz konusunda emin olamıyorsanız Flutter sizin için iyi bir başlangıç noktası olabilir.