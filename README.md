
# StajRadar – Staj Başvuru Takip Sistemi

## Proje Hakkında

StajRadar, üniversite öğrencilerinin staj başvurularını tek bir
platform üzerinden takip edebilmelerini sağlayan bir web uygulamasıdır.

Öğrenciler farklı firmalara yaptıkları başvuruların bilgilerini ve
başvuru durumlarını takip etmekte zorlanabilmektedir. StajRadar,
bu bilgileri düzenli bir şekilde görüntülemeyi amaçlamaktadır.

## Hedef Kullanıcılar

Staj veya iş yeri eğitimi başvurusu yapan üniversite öğrencileri.

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- HTML ve CSS
- Git ve GitHub
- GitHub Projects

## Projeyi Çalıştırma

Bilgisayarda Node.js ve npm kurulu olmalıdır.

### 1. Depoyu klonlayın

```bash
git clone https://github.com/muhammeddag45/StajRadar.git
```

### 2. Proje klasörüne girin

```bash
cd StajRadar/frontend
```

### 3. Bağımlılıkları yükleyin

```bash
npm install
```

### 4. Uygulamayı başlatın

```bash
npm run dev
```

Terminalde gösterilen yerel adresi tarayıcıda açın.
Genellikle http://localhost:5173/ adresi kullanılır.

## Geliştirilen Özellikler

### 1. Staj Başvurusu Ekleme

Kullanıcı firma adı ve pozisyon bilgilerini girerek yeni bir
staj başvurusu oluşturabilir.

**Nasıl test edilir?**

1. Uygulamayı açın.
2. Firma Adı alanına "ABC Teknoloji" yazın.
3. Pozisyon alanına "Yazılım Stajyeri" yazın.
4. "Başvuru Ekle" butonuna basın.
5. Başvurunun listede görüntülendiğini doğrulayın.
6. Alanları boş bırakarak tekrar deneyin.
7. Hata mesajının görüntülendiğini doğrulayın.

İlgili görev: [Issue #1](https://github.com/muhammeddag45/StajRadar/issues/1)

Pull Request: [PR #7](https://github.com/muhammeddag45/StajRadar/pull/7)

### 2. Başvuru Durumunu Güncelleme

Kullanıcı başvurularının durumunu Beklemede, Mülakat,
Kabul Edildi ve Reddedildi olarak değiştirebilir.

**Nasıl test edilir?**

1. Uygulamaya iki farklı staj başvurusu ekleyin.
2. İlk başvurunun durumunu "Mülakat" olarak değiştirin.
3. Durumun ekranda güncellendiğini doğrulayın.
4. İlk başvurunun durumunu "Kabul Edildi" yapın.
5. İkinci başvurunun durumunun değişmediğini doğrulayın.
6. "Reddedildi" seçeneğini de deneyin.

İlgili görev: [Issue #2](https://github.com/muhammeddag45/StajRadar/issues/2)

Pull Request: [PR #8](https://github.com/muhammeddag45/StajRadar/pull/8)

## İş Takip Panosu

Proje görevleri GitHub Projects üzerinden takip edilmektedir.

[StajRadar Geliştirme Panosu](https://github.com/users/muhammeddag45/projects/1/views/1)

Panoda Todo, In Progress ve Done sütunları bulunmaktadır.

Toplam beş görev planlanmıştır. İlk iki görev geliştirilmiş
ve test edilmiştir. Diğer üç görev ileride geliştirilecektir.

## Kod Kontrolleri

Projenin derlenmesi ve kod kalitesi kontrolleri için:

```bash
npm run build
npm run lint
```

Her iki komut da geliştirilen özellikler için başarıyla çalıştırılmıştır.

## Mevcut Sınırlamalar

- Uygulama şu anda yalnızca frontend içermektedir.
- Veriler uygulama belleğinde tutulmaktadır.
- Sayfa yenilendiğinde eklenen başvurular kaybolmaktadır.
- Başvuru silme, filtreleme ve istatistik özellikleri
  henüz geliştirilmemiştir.

## Geliştirici

Muhammed Dağ

Bilgisayar Mühendisliği 4. Sınıf

Güncel Yazılım Geliştirme Süreçleri ve DevOps dersi
