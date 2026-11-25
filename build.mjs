// Sayfaları üretir: node build.mjs  (ortak üst/alt bölüm tek yerde)
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const MAIL = 'bilicisoftwaree@gmail.com';
const DATE_TR = '26 Kasım 2026';
const DATE_EN = 'November 26, 2026';
const mail = (subject, text = MAIL) => `<a href="mailto:${MAIL}?subject=${encodeURIComponent(subject)}">${text}</a>`;

const L = {
  tr: {
    nav: [['/destek/', 'Destek'], ['/gizlilik/', 'Gizlilik'], ['/kosullar/', 'Koşullar']],
    other: ['/en/', 'EN'],
    home: '/',
    footer: `© 2026 VB Tech Labs · <a href="/gizlilik/">Gizlilik ve KVKK</a> · <a href="/kosullar/">Kullanım koşulları</a> · <a href="/hesap-silme/">Hesap ve veri silme</a> · <a href="/destek/">Destek</a>`,
  },
  en: {
    nav: [['/en/support/', 'Support'], ['/en/privacy/', 'Privacy'], ['/en/terms/', 'Terms']],
    other: ['/', 'TR'],
    home: '/en/',
    footer: `© 2026 VB Tech Labs · <a href="/en/privacy/">Privacy</a> · <a href="/en/terms/">Terms of use</a> · <a href="/en/delete-account/">Delete account &amp; data</a> · <a href="/en/support/">Support</a>`,
  },
};

function page({ path, lang, title, description, alt, body }) {
  const l = L[lang];
  const nav = l.nav.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="/assets/logo.png">
<link rel="apple-touch-icon" href="/assets/logo.png">
<link rel="alternate" hreflang="${lang === 'tr' ? 'en' : 'tr'}" href="https://zinglogames.github.io${alt}">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<header class="site"><div class="wrap">
  <a class="brand" href="${l.home}"><img src="/assets/logo.png" alt="" width="40" height="40"><span>Zinglo <b>Words</b></span></a>
  <nav class="site" aria-label="${lang === 'tr' ? 'Site' : 'Site'}">${nav}<a class="lang" href="${alt}" hreflang="${lang === 'tr' ? 'en' : 'tr'}" lang="${lang === 'tr' ? 'en' : 'tr'}">${l.other[1]}</a></nav>
</div></header>
<main><div class="wrap">
${body.trim()}
</div></main>
<footer class="site"><div class="wrap">
  ${l.footer}
</div></footer>
</body>
</html>
`;
  const file = `.${path}index.html`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

/* ======================= TÜRKÇE ======================= */

page({
  path: '/', lang: 'tr', alt: '/en/',
  title: 'Zinglo Words: Kelime Oyunu',
  description: 'Harfleri birleştir, kelimeleri bul, dünyanın şehirlerini gez. Türkçe ve İngilizce kelime bulmaca oyunu.',
  body: `
  <section class="hero">
    <img src="/assets/logo.png" alt="Zinglo Words logosu" width="112" height="112">
    <div><h1>Zinglo Words</h1><p class="lead" style="margin:0">Harfleri birleştir, kelimeleri bul, dünyayı gez.</p></div>
  </section>
  <p>Zinglo Words, harf çarkından kelimeler kurup bulmacayı doldurduğun bir kelime oyunudur. Her bölüm seni yeni bir şehre götürür; pullarını toplar, kartpostal albümünü doldurursun. Türkçe ve İngilizce oynanır, internet olmadan da çalışır.</p>
  <div class="grid">
    <div class="card"><h3>Şehir şehir yolculuk</h3><p>Bölümleri bitirdikçe haritada yeni şehirler açılır, her şehrin pulunu toplarsın.</p></div>
    <div class="card"><h3>Günlük bulmaca</h3><p>Her gün yeni bir bulmaca, seri ve ödüller.</p></div>
    <div class="card"><h3>Kelime öğren</h3><p>Bulduğun kelimeleri öğrendiğin dilde de gör, kelime defterinde biriktir.</p></div>
  </div>
  <div class="note">Sorun veya önerin mi var? <a href="/destek/">Destek sayfasına</a> bak ya da ${mail('Zinglo Words')} adresine yaz.</div>`,
});

page({
  path: '/destek/', lang: 'tr', alt: '/en/support/',
  title: 'Destek | Zinglo Words',
  description: 'Zinglo Words destek ve sık sorulan sorular.',
  body: `
  <h1>Destek</h1>
  <p class="lead">Sorun, öneri veya hatalı kelime bildirimi için bize yaz: ${mail('Zinglo Words destek')}. Genellikle 2 iş günü içinde yanıtlarız.</p>
  <p>Yazarken cihaz modelini, uygulama sürümünü (Ayarlar ekranının altında) ve sorunun hangi bölümde olduğunu eklersen daha hızlı yardımcı olabiliriz.</p>

  <h2>Sık sorulan sorular</h2>
  <h3>İnternet olmadan oynayabilir miyim?</h3>
  <p>Evet. Oyun tamamen çevrimdışı çalışır. İnternet varken ilerlemen sessizce yedeklenir.</p>
  <h3>Bulduğum kelime kabul edilmedi.</h3>
  <p>Her bölümde yalnızca sözlüğümüzdeki kelimeler kabul edilir; bazı geçerli kelimeler "bonus kelime" sayılır. Eksik veya hatalı olduğunu düşündüğün bir kelimeyi bize bildir, sözlüğü düzenli olarak güncelliyoruz.</p>
  <h3>Telefonumu değiştirdim, ilerlemem ne olacak?</h3>
  <p>İlerlemen hesap açmana gerek kalmadan anonim bir kimlikle yedeklenir. Aynı mağaza hesabıyla yeni cihazda oyunu açıp Mağaza ekranındaki "Satın alımları geri yükle" ile satın alımlarını geri alabilirsin. İlerleme taşıma konusunda sorun yaşarsan bize yaz.</p>
  <h3>Satın aldığım ürün gelmedi.</h3>
  <p>Mağaza ekranında "Satın alımları geri yükle"ye dokun. Sorun devam ederse satın alma makbuzundaki sipariş numarasıyla bize yaz.</p>
  <h3>Zinglo Pro aboneliğini nasıl iptal ederim?</h3>
  <p>iPhone'da Ayarlar → adın → Abonelikler; Android'de Google Play → Profil → Ödemeler ve abonelikler bölümünden iptal edebilirsin. Uygulamayı silmek aboneliği iptal etmez.</p>
  <h3>İade nasıl alırım?</h3>
  <p>Ödemeleri Apple ve Google aldığı için iadeler onların politikalarına tabidir: iPhone'da <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>, Android'de Google Play sipariş geçmişi üzerinden talep edebilirsin.</p>
  <h3>Verilerimi nasıl silerim?</h3>
  <p><a href="/hesap-silme/">Hesap ve veri silme</a> sayfasına bak.</p>`,
});

page({
  path: '/gizlilik/', lang: 'tr', alt: '/en/privacy/',
  title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni | Zinglo Words',
  description: 'Zinglo Words gizlilik politikası ve 6698 sayılı KVKK kapsamında aydınlatma metni.',
  body: `
  <h1>Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
  <p class="meta">Yürürlük tarihi: ${DATE_TR}</p>

  <p>Bu metin, Zinglo Words mobil oyununu ("Oyun") kullanırken kişisel verilerinin nasıl işlendiğini, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK"), AB Genel Veri Koruma Tüzüğü ("GDPR") ve ilgili mevzuat çerçevesinde açıklar.</p>

  <h2>1. Veri sorumlusu</h2>
  <p><strong>Veysel Bilici (VB Tech Labs)</strong><br>İletişim: <a href="mailto:${MAIL}">${MAIL}</a></p>

  <h2>2. Kısaca</h2>
  <div class="card">
    <ul>
      <li>Kayıt olmadan oynarsın; adını, e-postanı veya telefonunu istemeyiz.</li>
      <li>İlerlemen önce <strong>kendi cihazında</strong> tutulur, yedeği anonim bir kimlikle saklanır.</li>
      <li>Verini satmayız.</li>
      <li>Ödeme bilgilerini görmeyiz; satın alımları Apple veya Google alır.</li>
      <li>Reklamlar gösterilirse, kişiselleştirilmiş reklam yalnızca iznin olursa kullanılır.</li>
    </ul>
  </div>

  <h2>3. İşlenen veriler ve amaçları</h2>
  <div class="table-scroll"><table>
    <thead><tr><th>Veri</th><th>Amaç</th><th>Hukuki sebep (KVKK m.5)</th></tr></thead>
    <tbody>
      <tr><td>Anonim kullanıcı kimliği</td><td>Hesap açmadan ilerlemeni güvenle yedekleme</td><td>Sözleşmenin ifası (m.5/2-c)</td></tr>
      <tr><td>Oyun ilerlemesi: bölüm, altın, ipuçları, pullar, seri, başarılar, dil tercihleri</td><td>Oyunu sunma, ilerlemeyi yedekleme ve geri yükleme</td><td>Sözleşmenin ifası (m.5/2-c)</td></tr>
      <tr><td>Oyuncu adı ve avatar (kendin seçersin, gerçek adın olması gerekmez)</td><td>Profilini gösterme; lig ve sıralama gibi özelliklerde diğer oyunculara görünme</td><td>Sözleşmenin ifası (m.5/2-c)</td></tr>
      <tr><td>Davet kodu ve davet ilişkisi</td><td>Arkadaş davet ödüllerini doğrulama ve verme</td><td>Sözleşmenin ifası (m.5/2-c)</td></tr>
      <tr><td>Satın alma bilgisi: ürün, tarih, abonelik durumu, mağaza işlem kimliği. <em>Kart veya banka bilgisi bize ulaşmaz.</em></td><td>Satın alınan ürünleri ve Zinglo Pro'yu açma, doğrulama, geri yükleme; iade ve uyuşmazlık süreçleri</td><td>Sözleşmenin ifası (m.5/2-c), hukuki yükümlülük (m.5/2-ç)</td></tr>
      <tr><td>Kullanım olayları (ör. bölüm başladı/bitti, ipucu kullanıldı) ve hata kayıtları; cihaz modeli, işletim sistemi ve uygulama sürümü</td><td>Oyunu geliştirme, zorluk dengesini ayarlama, hataları giderme</td><td>Meşru menfaat (m.5/2-f)</td></tr>
      <tr><td>Reklam kimliği (IDFA/AAID) ve reklam etkileşimleri, <em>yalnızca reklam gösterilirse</em></td><td>Reklam gösterme, ödüllü reklam karşılığını verme, sahte tıklamayı önleme; iznin varsa kişiselleştirme</td><td>Açık rıza (kişiselleştirilmiş reklam ve takip için), meşru menfaat (diğerleri)</td></tr>
      <tr><td>Destek yazışmaları</td><td>Taleplerini yanıtlama</td><td>Meşru menfaat (m.5/2-f)</td></tr>
    </tbody>
  </table></div>
  <p>Özel nitelikli kişisel veri (sağlık, din, etnik köken vb.) istemeyiz. Konum, rehber, fotoğraf veya mikrofon erişimi kullanmayız.</p>

  <h2>4. Verilerin saklandığı yer ve aktarım</h2>
  <p>Yedekler, hizmet sağlayıcımız Supabase'in <strong>Almanya (Frankfurt, AB)</strong> veri merkezindeki sunucularda, aktarım sırasında ve depolamada şifrelenerek tutulur. Yurt dışına aktarım KVKK m.9 kapsamında, standart sözleşmeler ve gerekli güvenceler çerçevesinde yapılır.</p>
  <p>Hizmet aldığımız sağlayıcılar:</p>
  <ul>
    <li><strong>Supabase</strong>: veritabanı ve anonim kimlik doğrulama (AB).</li>
    <li><strong>Apple ve Google</strong>: uygulama mağazaları ve ödeme altyapısı.</li>
    <li><strong>RevenueCat</strong>: satın alma ve abonelik durumunu doğrulama.</li>
    <li><strong>PostHog</strong>: anonim kullanım istatistikleri.</li>
    <li><strong>Sentry</strong>: hata ve çökme kayıtları.</li>
    <li><strong>Reklam ağları</strong> (Google AdMob ve/veya AppLovin), yalnızca reklam gösterildiğinde.</li>
  </ul>
  <p>Verilerin, kanunen yetkili kamu kurumlarının talebi dışında başka üçüncü kişilerle paylaşılmaz.</p>

  <h2>5. Reklam ve takip</h2>
  <p>iPhone'da, seni başka şirketlerin uygulama ve sitelerinde takip etmek için izin gerekirse önce Apple'ın "Uygulama Takip Şeffaflığı" iznini isteriz; reddedersen reklam kimliğin kullanılmaz. Android'de reklam kimliğini telefon ayarlarından silebilir veya kişiselleştirilmiş reklamları kapatabilirsin. AB ve Birleşik Krallık'ta kişiselleştirilmiş reklam için ayrıca onayın istenir. Reklamsız sürüm için "Reklamları kaldır" veya Zinglo Pro satın alabilirsin.</p>

  <h2>6. Saklama süresi</h2>
  <p>Verilerin, sen silene kadar saklanır. Oyunu 24 ay boyunca hiç açmazsan anonim yedeğin silinebilir. Silme talebinden sonra veriler en geç 30 gün içinde sistemlerimizden silinir veya anonim hâle getirilir. Yasal yükümlülük gereği tutulması gereken kayıtlar ilgili süre boyunca saklanır.</p>

  <h2>7. Haklarınız (KVKK m.11, GDPR)</h2>
  <p>Kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, silinmesini veya yok edilmesini isteme, bu işlemlerin aktarılan kişilere bildirilmesini isteme, otomatik sistemlerle analiz sonucu aleyhine bir sonuç çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğraman hâlinde zararın giderilmesini talep etme haklarına sahipsin. AB'de yaşıyorsan verilerinin taşınmasını isteme, işlemeye itiraz etme, rızanı geri alma ve bulunduğun ülkenin veri koruma otoritesine şikâyet hakların da vardır.</p>
  <p>Taleplerini ${mail('Zinglo Words KVKK başvurusu', MAIL)} adresine iletebilirsin. Talebin en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. Verilerini silmek için <a href="/hesap-silme/">Hesap ve veri silme</a> sayfasına bakabilirsin.</p>

  <h2>8. Çocukların gizliliği</h2>
  <p>Oyun 13 yaş ve üzeri kullanıcılar için tasarlanmıştır ve çocuklara yönelik değildir. 13 yaşından küçük olduğunu bildiğimiz kişilerden bilerek veri toplamayız; böyle bir durum fark edersen bize yaz, verileri sileriz.</p>

  <h2>9. Güvenlik</h2>
  <p>Sunucudaki verilere erişim satır düzeyinde güvenlik kurallarıyla sınırlandırılmıştır: her kullanıcı yalnızca kendi verisine erişebilir. Bağlantılar şifrelidir (TLS).</p>

  <h2>10. Değişiklikler</h2>
  <p>Bu metni güncelleyebiliriz. Önemli değişiklikleri oyun içinden duyururuz; güncel sürüm her zaman bu sayfadadır.</p>`,
});

page({
  path: '/kosullar/', lang: 'tr', alt: '/en/terms/',
  title: 'Kullanım Koşulları | Zinglo Words',
  description: 'Zinglo Words kullanım koşulları, satın alma ve abonelik kuralları.',
  body: `
  <h1>Kullanım Koşulları</h1>
  <p class="meta">Yürürlük tarihi: ${DATE_TR}</p>

  <p>Zinglo Words oyununu ("Oyun") kullanarak bu koşulları kabul etmiş olursun. Oyun VB Tech Labs (Veysel Bilici) tarafından sunulur.</p>

  <h2>1. Oyun</h2>
  <p>Oyun ücretsiz indirilir ve oynanır. İsteğe bağlı olarak oyun içi altın ve ipucu paketleri, "Reklamları kaldır" ve Zinglo Pro aboneliği satın alınabilir. Kelime anlamları ve çeviriler bilgilendirme amaçlıdır; hata içerebilir.</p>

  <h2>2. Kullanım kuralları</h2>
  <p>Oyunu yalnızca kişisel ve yasal amaçlarla kullanabilirsin. Hile yazılımı kullanmak, oyunun işleyişini veya sunucularını bozmaya çalışmak, sahte davet kodlarıyla ödül toplamak ve oyuncu adında hakaret, nefret söylemi veya başkasının kimliğine bürünme yasaktır. Bu kurallara aykırı adları değiştirme ve kullanımı durdurma hakkımız saklıdır.</p>

  <h2>3. Sanal ürünler</h2>
  <p>Altın, ipucu, pul ve benzeri oyun içi öğeler yalnızca Oyun içinde kullanılabilen, para değeri olmayan sanal öğelerdir; nakde çevrilemez, devredilemez. Satın aldığın sanal öğe teslim edildiği anda kullanılmaya hazırdır.</p>

  <h2>4. Satın alımlar ve Zinglo Pro aboneliği</h2>
  <ul>
    <li>Geçerli fiyat, satın almadan önce oyunda ve mağazanın onay ekranında gösterilir. Fiyatlar ülkeye göre değişebilir ve vergiler dahildir.</li>
    <li>Ödeme, onayınla birlikte App Store veya Google Play hesabından tahsil edilir.</li>
    <li>Zinglo Pro aylık ve yıllık olarak sunulur. Abonelik, dönem bitiminden en az 24 saat önce iptal edilmedikçe aynı süre ve fiyatla otomatik yenilenir; yenileme ücreti dönem bitmeden önceki 24 saat içinde tahsil edilir.</li>
    <li>Ücretsiz deneme sunulursa, deneme bitmeden iptal edilmediğinde ücretli aboneliğe dönüşür. Denemenin kullanılmayan kısmı abonelik satın alındığında geçersiz olur.</li>
    <li>Aboneliğini iPhone'da Ayarlar → adın → Abonelikler; Android'de Google Play → Ödemeler ve abonelikler bölümünden yönetebilir veya iptal edebilirsin. İptal, içinde bulunulan dönemin sonunda geçerli olur.</li>
    <li>İade talepleri ilgili mağazanın (Apple veya Google) iade politikalarına tabidir. Satın alımlarını oyundaki "Satın alımları geri yükle" ile yeni cihazına taşıyabilirsin.</li>
  </ul>

  <h2>5. Ödüllü içerik</h2>
  <p>Oyunda para ile satın alınan rastgele ödül (ganimet kutusu) yoktur. Ücretsiz ödül çarkı gibi şans içeren özelliklerde olasılıklar oyunda gösterilir.</p>

  <h2>6. Fikrî haklar</h2>
  <p>Oyunun tasarımı, yazılımı, logosu, bölümleri ve kelime listelerinin düzenlemesi VB Tech Labs'e aittir. Üçüncü kişilere ait görsel ve içerikler lisanslarına uygun olarak kullanılır; atıflar oyundaki "Fotoğraf hakları" ekranında yer alır.</p>

  <h2>7. Sorumluluğun sınırlandırılması</h2>
  <p>Oyun "olduğu gibi" sunulur. Kesintisiz veya hatasız çalışacağını garanti etmeyiz. Yürürlükteki mevzuatın izin verdiği ölçüde, Oyunun kullanımından doğan dolaylı zararlardan sorumlu değiliz. Tüketici olarak kanundan doğan hakların saklıdır.</p>

  <h2>8. Hesabın sonlandırılması</h2>
  <p>Verilerini istediğin zaman silebilirsin (<a href="/hesap-silme/">Hesap ve veri silme</a>). Verilerini silmek, kullanılmamış sanal öğelerin ve ilerlemenin kalıcı olarak kaybolmasına yol açar.</p>

  <h2>9. Değişiklikler ve uygulanacak hukuk</h2>
  <p>Bu koşulları güncelleyebiliriz; güncel sürüm bu sayfadadır. Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Tüketici işlemlerinde ilgili tüketici hakem heyetleri ve tüketici mahkemeleri yetkilidir.</p>

  <h2>10. İletişim</h2>
  <p><a href="mailto:${MAIL}">${MAIL}</a></p>`,
});

page({
  path: '/hesap-silme/', lang: 'tr', alt: '/en/delete-account/',
  title: 'Hesap ve Veri Silme | Zinglo Words',
  description: 'Zinglo Words hesabını ve verilerini nasıl silebileceğin.',
  body: `
  <h1>Hesap ve veri silme</h1>
  <p class="lead">Zinglo Words'teki verilerini istediğin zaman, ücretsiz olarak silebilirsin.</p>

  <h2>Oyun içinden (en hızlı yol)</h2>
  <ol class="steps">
    <li>Zinglo Words'ü aç ve <strong>Ayarlar</strong> ekranına git.</li>
    <li><strong>"Yasal ve destek"</strong> bölümünde <strong>"Hesabımı ve verilerimi sil"</strong> seçeneğine dokun.</li>
    <li><strong>"Kalıcı olarak sil"</strong> ile onayla. Sunucudaki anonim hesabın ve yedeğin hemen, cihazındaki ilerleme de aynı anda silinir. Bu adım için internet bağlantısı gerekir.</li>
  </ol>

  <h2>E-postayla</h2>
  <p>Oyuna erişemiyorsan ${mail('Zinglo Words veri silme talebi', MAIL)} adresine "Zinglo Words veri silme talebi" konulu bir e-posta gönder. Mümkünse oyundaki davet kodunu (Profil ekranında) ekle; hesabını bulmamızı kolaylaştırır. Talebin en geç 30 gün içinde sonuçlandırılır ve sana bilgi verilir.</p>

  <h2>Neler silinir, neler kalır?</h2>
  <div class="card">
    <p><strong>Silinenler:</strong> anonim kullanıcı kimliği, oyun ilerlemesi, altın ve ipuçları, pullar, oyuncu adı ve avatar, lig ve sıralama kayıtları, davet kodu.</p>
    <p><strong>Saklanabilecekler:</strong> Yasal yükümlülük gereği tutulması gereken kayıtlar ilgili süre boyunca saklanır. Satın alma kayıtları Apple veya Google tarafından tutulur. Anonim kullanım istatistikleri seninle ilişkilendirilemez.</p>
  </div>
  <div class="note"><strong>Aboneliğin varsa:</strong> Verilerini silmek aboneliği iptal etmez. Aboneliği App Store veya Google Play hesap ayarlarından ayrıca iptal etmelisin. Kalıcı satın alımlar (ör. "Reklamları kaldır") "Satın alımları geri yükle" ile geri alınabilir.</div>`,
});

/* ======================= ENGLISH ======================= */

page({
  path: '/en/', lang: 'en', alt: '/',
  title: 'Zinglo Words: Word Puzzle',
  description: 'Connect letters, find words, travel the world’s cities. A crossword-style word game in English and Turkish.',
  body: `
  <section class="hero">
    <img src="/assets/logo.png" alt="Zinglo Words logo" width="112" height="112">
    <div><h1>Zinglo Words</h1><p class="lead" style="margin:0">Connect letters, find words, see the world.</p></div>
  </section>
  <p>Zinglo Words is a word game where you build words from a letter wheel to fill the puzzle. Every level takes you to a new city, where you collect stamps and fill your postcard album. Play in English or Turkish, with or without an internet connection.</p>
  <div class="grid">
    <div class="card"><h3>City by city</h3><p>Finish levels to unlock new cities on the map and collect each city’s stamp.</p></div>
    <div class="card"><h3>Daily puzzle</h3><p>A fresh puzzle every day, with streaks and rewards.</p></div>
    <div class="card"><h3>Learn words</h3><p>See the words you find in the language you’re learning and keep them in your word book.</p></div>
  </div>
  <div class="note">Questions or feedback? Visit <a href="/en/support/">Support</a> or email ${mail('Zinglo Words')}.</div>`,
});

page({
  path: '/en/support/', lang: 'en', alt: '/destek/',
  title: 'Support | Zinglo Words',
  description: 'Zinglo Words support and frequently asked questions.',
  body: `
  <h1>Support</h1>
  <p class="lead">For problems, suggestions or a word we got wrong, email ${mail('Zinglo Words support')}. We usually reply within 2 business days.</p>
  <p>Including your device model, the app version (bottom of the Settings screen) and the level where it happened helps us help you faster.</p>

  <h2>Frequently asked questions</h2>
  <h3>Can I play offline?</h3>
  <p>Yes. The game works fully offline. When you’re online, your progress is backed up quietly.</p>
  <h3>A word I found wasn’t accepted.</h3>
  <p>Each level accepts only words from our dictionary, and some valid words count as “bonus words”. Tell us about any word you think is missing or wrong; we update the dictionary regularly.</p>
  <h3>I changed phones. What happens to my progress?</h3>
  <p>Your progress is backed up under an anonymous ID, no sign-up needed. On your new device, open the game with the same store account and tap “Restore purchases” in the Shop to get your purchases back. If your progress doesn’t carry over, email us.</p>
  <h3>My purchase didn’t arrive.</h3>
  <p>Tap “Restore purchases” in the Shop. If that doesn’t help, email us with the order number from your receipt.</p>
  <h3>How do I cancel Zinglo Pro?</h3>
  <p>On iPhone: Settings → your name → Subscriptions. On Android: Google Play → Profile → Payments &amp; subscriptions. Deleting the app does not cancel your subscription.</p>
  <h3>How do I get a refund?</h3>
  <p>Apple and Google process payments, so refunds follow their policies: on iPhone use <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>; on Android use your Google Play order history.</p>
  <h3>How do I delete my data?</h3>
  <p>See <a href="/en/delete-account/">Delete account &amp; data</a>.</p>`,
});

page({
  path: '/en/privacy/', lang: 'en', alt: '/gizlilik/',
  title: 'Privacy Policy | Zinglo Words',
  description: 'Zinglo Words privacy policy.',
  body: `
  <h1>Privacy Policy</h1>
  <p class="meta">Effective: ${DATE_EN}</p>

  <p>This policy explains how your personal data is processed when you use the Zinglo Words mobile game (the “Game”), under the EU General Data Protection Regulation (“GDPR”), Turkey’s Personal Data Protection Law No. 6698 (“KVKK”) and other applicable laws.</p>

  <h2>1. Data controller</h2>
  <p><strong>Veysel Bilici (VB Tech Labs)</strong><br>Contact: <a href="mailto:${MAIL}">${MAIL}</a></p>

  <h2>2. In short</h2>
  <div class="card">
    <ul>
      <li>You play without signing up; we don’t ask for your name, email or phone number.</li>
      <li>Your progress is kept <strong>on your device</strong> first and backed up under an anonymous ID.</li>
      <li>We don’t sell your data.</li>
      <li>We never see your payment details; Apple or Google handles payments.</li>
      <li>If ads are shown, personalized ads are used only with your permission.</li>
    </ul>
  </div>

  <h2>3. Data we process and why</h2>
  <div class="table-scroll"><table>
    <thead><tr><th>Data</th><th>Purpose</th><th>Legal basis</th></tr></thead>
    <tbody>
      <tr><td>Anonymous user ID</td><td>Back up your progress safely without an account</td><td>Performance of contract</td></tr>
      <tr><td>Game progress: levels, coins, hints, stamps, streaks, achievements, language settings</td><td>Provide the Game; back up and restore progress</td><td>Performance of contract</td></tr>
      <tr><td>Player name and avatar (you choose them; they need not be your real name)</td><td>Show your profile; display you to other players in features such as leagues and leaderboards</td><td>Performance of contract</td></tr>
      <tr><td>Invite code and invite relationship</td><td>Verify and grant friend-invite rewards</td><td>Performance of contract</td></tr>
      <tr><td>Purchase data: product, date, subscription status, store transaction ID. <em>We never receive card or bank details.</em></td><td>Unlock and verify purchases and Zinglo Pro, restore purchases, handle refunds and disputes</td><td>Performance of contract; legal obligation</td></tr>
      <tr><td>Usage events (e.g. level started/completed, hint used) and crash logs; device model, OS and app version</td><td>Improve the Game, tune difficulty, fix bugs</td><td>Legitimate interests</td></tr>
      <tr><td>Advertising ID (IDFA/AAID) and ad interactions, <em>only if ads are shown</em></td><td>Show ads, grant rewarded-ad rewards, prevent ad fraud; personalize ads with your consent</td><td>Consent (personalized ads and tracking); legitimate interests (other)</td></tr>
      <tr><td>Support emails</td><td>Answer your requests</td><td>Legitimate interests</td></tr>
    </tbody>
  </table></div>
  <p>We don’t ask for sensitive data (health, religion, ethnicity, etc.). We don’t access your location, contacts, photos or microphone.</p>

  <h2>4. Where data is stored and who processes it</h2>
  <p>Backups are stored, encrypted in transit and at rest, on servers of our provider Supabase in <strong>Frankfurt, Germany (EU)</strong>. Transfers outside your country rely on standard contractual clauses and appropriate safeguards.</p>
  <p>Service providers we use:</p>
  <ul>
    <li><strong>Supabase</strong>: database and anonymous authentication (EU).</li>
    <li><strong>Apple and Google</strong>: app stores and payments.</li>
    <li><strong>RevenueCat</strong>: purchase and subscription verification.</li>
    <li><strong>PostHog</strong>: anonymous usage analytics.</li>
    <li><strong>Sentry</strong>: error and crash reporting.</li>
    <li><strong>Ad networks</strong> (Google AdMob and/or AppLovin), only when ads are shown.</li>
  </ul>
  <p>We don’t share your data with any other third party except when required by law.</p>

  <h2>5. Ads and tracking</h2>
  <p>On iPhone, if tracking across other companies’ apps and websites is needed, we first ask for permission through Apple’s App Tracking Transparency; if you decline, your advertising ID is not used. On Android you can reset or delete your advertising ID or turn off ad personalization in your phone settings. In the EU and UK we ask for your consent before personalized ads. You can remove ads by buying “Remove ads” or Zinglo Pro.</p>

  <h2>6. Retention</h2>
  <p>We keep your data until you delete it. If you don’t open the Game for 24 months, your anonymous backup may be deleted. After a deletion request, data is deleted or anonymized within 30 days. Records we must keep by law are kept for the required period.</p>

  <h2>7. Your rights</h2>
  <p>You can ask to access, correct, delete or export your data, object to or restrict processing, and withdraw consent at any time. You may also complain to your local data protection authority. Users in Turkey have the rights listed in Article 11 of KVKK. California residents may request access and deletion; we do not sell or share personal information for cross-context behavioral advertising without consent.</p>
  <p>Send requests to ${mail('Zinglo Words privacy request', MAIL)}. We respond free of charge within 30 days. To delete your data, see <a href="/en/delete-account/">Delete account &amp; data</a>.</p>

  <h2>8. Children</h2>
  <p>The Game is designed for users aged 13 and over and is not directed at children. We don’t knowingly collect data from children under 13; if you believe we have, email us and we will delete it.</p>

  <h2>9. Security</h2>
  <p>Access to server data is restricted by row-level security rules so each user can access only their own data. Connections are encrypted (TLS).</p>

  <h2>10. Changes</h2>
  <p>We may update this policy. We’ll announce significant changes in the Game; the current version is always on this page. The Turkish version of this policy is available <a href="/gizlilik/">here</a>.</p>`,
});

page({
  path: '/en/terms/', lang: 'en', alt: '/kosullar/',
  title: 'Terms of Use | Zinglo Words',
  description: 'Zinglo Words terms of use, purchases and subscriptions.',
  body: `
  <h1>Terms of Use</h1>
  <p class="meta">Effective: ${DATE_EN}</p>

  <p>By using the Zinglo Words game (the “Game”) you agree to these terms. The Game is provided by VB Tech Labs (Veysel Bilici).</p>

  <h2>1. The Game</h2>
  <p>The Game is free to download and play. Optional in-game coin and hint packs, “Remove ads” and the Zinglo Pro subscription are available for purchase. Word meanings and translations are for information only and may contain mistakes.</p>

  <h2>2. Rules of use</h2>
  <p>Use the Game only for personal, lawful purposes. Cheating software, attempts to disrupt the Game or its servers, collecting rewards with fake invite codes, and offensive, hateful or impersonating player names are not allowed. We may change such names and suspend such use.</p>

  <h2>3. Virtual items</h2>
  <p>Coins, hints, stamps and similar items are virtual items with no cash value that can be used only in the Game; they cannot be exchanged for money or transferred. Purchased virtual items are delivered and ready to use immediately.</p>

  <h2>4. Purchases and the Zinglo Pro subscription</h2>
  <ul>
    <li>The current price is shown in the Game and on the store’s confirmation screen before you buy. Prices may vary by country and include applicable taxes.</li>
    <li>Payment is charged to your App Store or Google Play account when you confirm the purchase.</li>
    <li>Zinglo Pro is offered monthly and yearly. It renews automatically for the same period and price unless cancelled at least 24 hours before the end of the current period; your account is charged for renewal within 24 hours before the period ends.</li>
    <li>If a free trial is offered, it converts to a paid subscription unless cancelled before the trial ends. Any unused part of a trial is forfeited when you buy a subscription.</li>
    <li>Manage or cancel your subscription on iPhone in Settings → your name → Subscriptions, or on Android in Google Play → Payments &amp; subscriptions. Cancellation takes effect at the end of the current period.</li>
    <li>Refunds follow the policies of the store you bought from (Apple or Google). Use “Restore purchases” in the Game to move purchases to a new device.</li>
  </ul>
  <p>Apple’s standard <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a> also applies to downloads from the App Store.</p>

  <h2>5. Random rewards</h2>
  <p>The Game has no paid random rewards (loot boxes). Where a free feature involves chance, such as the reward wheel, the odds are shown in the Game.</p>

  <h2>6. Intellectual property</h2>
  <p>The Game’s design, software, logo, levels and word-list curation belong to VB Tech Labs. Third-party images and content are used under their licenses; credits are listed on the in-game “Photo credits” screen.</p>

  <h2>7. Limitation of liability</h2>
  <p>The Game is provided “as is”. We don’t guarantee it will be uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect damages arising from use of the Game. Your statutory consumer rights are not affected.</p>

  <h2>8. Ending use</h2>
  <p>You can delete your data at any time (<a href="/en/delete-account/">Delete account &amp; data</a>). Deleting your data permanently removes your progress and any unused virtual items.</p>

  <h2>9. Changes and governing law</h2>
  <p>We may update these terms; the current version is on this page. These terms are governed by the laws of the Republic of Turkey, without prejudice to mandatory consumer protection laws of your country of residence.</p>

  <h2>10. Contact</h2>
  <p><a href="mailto:${MAIL}">${MAIL}</a></p>`,
});

page({
  path: '/en/delete-account/', lang: 'en', alt: '/hesap-silme/',
  title: 'Delete Account & Data | Zinglo Words',
  description: 'How to delete your Zinglo Words account and data.',
  body: `
  <h1>Delete account &amp; data</h1>
  <p class="lead">You can delete your Zinglo Words data at any time, free of charge.</p>

  <h2>In the Game (fastest)</h2>
  <ol class="steps">
    <li>Open Zinglo Words and go to <strong>Settings</strong>.</li>
    <li>Under <strong>“Legal &amp; support”</strong>, tap <strong>“Delete account &amp; data”</strong>.</li>
    <li>Confirm with <strong>“Delete permanently”</strong>. Your anonymous account and backup on our servers are deleted immediately, together with the progress on your device. An internet connection is required.</li>
  </ol>

  <h2>By email</h2>
  <p>If you can’t access the Game, email ${mail('Zinglo Words data deletion request', MAIL)} with the subject “Zinglo Words data deletion request”. If possible, include your invite code (on the Profile screen) so we can find your account. We complete requests within 30 days and let you know.</p>

  <h2>What is deleted and what is kept</h2>
  <div class="card">
    <p><strong>Deleted:</strong> anonymous user ID, game progress, coins and hints, stamps, player name and avatar, league and leaderboard entries, invite code.</p>
    <p><strong>May be kept:</strong> records we must keep by law, for the required period. Purchase records are kept by Apple or Google. Anonymous usage statistics can’t be linked to you.</p>
  </div>
  <div class="note"><strong>Have a subscription?</strong> Deleting your data does not cancel it. Cancel separately in your App Store or Google Play account settings. Permanent purchases (such as “Remove ads”) can be recovered with “Restore purchases”.</div>`,
});

console.log('OK');
