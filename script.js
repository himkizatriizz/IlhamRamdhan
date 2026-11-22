
const materiData = [
    {
        judul: "Konsep Dasar Keamanan Siber",
        paragraf: "Keamanan siber (cybersecurity) adalah upaya melindungi sistem, jaringan, program, dan data dari serangan digital. Setiap aktivitas online — dari mengirim pesan hingga bertransaksi — bergantung pada keamanan siber. Memahami konsep dasarnya membantu kita menyadari bahwa keamanan bukan hanya tugas perusahaan teknologi, tetapi juga tanggung jawab setiap pengguna.",
        bagian: [
            {
                judul: "Apa itu Keamanan Siber?",
                paragraf: "Keamanan siber mencakup perlindungan terhadap semua aspek dunia digital: perangkat keras, perangkat lunak, jaringan, dan data. Tujuannya sederhana — memastikan informasi tetap aman, tersedia, dan hanya bisa diakses pihak yang berhak.",
                poin: [
                    "Melindungi perangkat: laptop, HP, dan tablet dari virus serta akses tidak sah.",
                    "Melindungi jaringan: WiFi, data seluler, dan koneksi internet dari penyadapan.",
                    "Melindungi aplikasi: media sosial, email, dan layanan online dari pembajakan.",
                    "Melindungi data: informasi pribadi dan file penting dari pencurian atau kerusakan."
                ]
            },
            {
                judul: "Prinsip CIA — Pondasi Keamanan Informasi",
                paragraf: "Praktisi keamanan siber bekerja berdasarkan tiga prinsip utama yang dikenal sebagai CIA Triad. Ketiga prinsip ini harus selalu dijaga secara bersamaan.",
                poin: [
                    "Confidentiality (Kerahasiaan): hanya pihak berwenang yang boleh mengakses informasi — itulah gunanya kata sandi dan enkripsi.",
                    "Integrity (Integritas): data tidak boleh diubah atau dirusak tanpa izin — penting untuk transaksi dan dokumen.",
                    "Availability (Ketersediaan): sistem dan data harus bisa diakses saat dibutuhkan — backup dan server yang andal menjaganya.",
                    "Contoh penerapan: kata sandi kuat menjaga kerahasiaan, verifikasi dua langkah menjaga integritas, dan backup rutin menjaga ketersediaan."
                ]
            },
            {
                judul: "Siapa Para Pelaku Ancaman?",
                paragraf: "Dunia keamanan siber mengenal berbagai jenis pelaku dengan motif dan kemampuan yang berbeda.",
                poin: [
                    "Black hat hacker: peretas jahat yang mencuri data atau merusak sistem untuk keuntungan.",
                    "White hat hacker (ethical hacker): peretas 'baik' yang dibayar untuk menemukan celah keamanan sebelum disalahgunakan.",
                    "Script kiddie: pemula yang menggunakan alat siap pakai tanpa memahami cara kerjanya — tetap berbahaya.",
                    "Hacktivist: pelaku yang meretas untuk menyampaikan pesan atau protes sosial.",
                    "Insider threat: ancaman yang datang dari dalam — karyawan atau orang dekat yang menyalahgunakan akses."
                ]
            },
            {
                judul: "Pertahanan Berlapis (Defense in Depth)",
                paragraf: "Tidak ada sistem yang 100% aman. Karena itu, pertahanan terbaik adalah berlapis — jika satu lapis jebol, lapis berikutnya masih melindungi.",
                poin: [
                    "Lapisan pertama — kesadaran: tidak klik link mencurigakan dan tidak bagikan OTP.",
                    "Lapisan kedua — kata sandi kuat dan autentikasi dua faktor.",
                    "Lapisan ketiga — pembaruan software dan antivirus yang aktif.",
                    "Lapisan keempat — backup rutin dan enkripsi data penting.",
                    "Lapisan kelima — pemantauan: periksa notifikasi login dan aktivitas akun secara berkala."
                ]
            }
        ],
        contoh: [
            { judul: "Serangan ransomware", teks: "Ransomware mengenkripsi seluruh file korban lalu meminta tebusan. Perusahaan dan rumah sakit di seluruh dunia pernah menjadi korban — backup yang baik adalah satu-satunya jalan pulih tanpa membayar." },
            { judul: "WiFi publik yang tidak aman", teks: "Di kafe atau bandara, peretas bisa menyadap data yang dikirim lewat WiFi publik. Login akun penting di jaringan seperti itu ibarat mengumumkan sandi ke orang asing." }
        ],
        istilah: [
            { istilah: "Cybersecurity", arti: "Keamanan siber, upaya melindungi sistem dan data dari serangan digital." },
            { istilah: "CIA Triad", arti: "Tiga prinsip keamanan informasi: kerahasiaan, integritas, dan ketersediaan." },
            { istilah: "Firewall", arti: "Tembok penghalang yang menyaring lalu lintas jaringan masuk dan keluar." },
            { istilah: "Zero-Day", arti: "Celah keamanan yang belum diketahui publik dan belum memiliki tambalan." },
            { istilah: "Patch", arti: "Pembaruan kecil pada software untuk memperbaiki bug dan celah keamanan." }
        ],
        tips: [
            "Pikirkan keamanan sebagai tanggung jawab bersama: lindungi akunmu, dan kamu ikut melindungi teman serta keluargamu.",
            "Mulai dari hal sederhana: kata sandi kuat, 2FA aktif, dan update rutin sudah menutup sebagian besar risiko.",
            "Jangan merasa 'kecil' sehingga tidak mungkin jadi target — peretas sering menyerang akun biasa karena lebih mudah.",
            "Belajar terus: ancaman digital terus berkembang, jadi pengetahuan keamanan juga harus diperbarui."
        ]
    },
    {
        judul: "Data Pribadi",
        paragraf: "Data pribadi adalah segala informasi yang berkaitan dengan seseorang dan dapat digunakan untuk mengenali, menghubungi, atau melacak orang tersebut. Di era media sosial, kita membagikan data pribadi setiap hari — kadang tanpa sadar — mulai dari nama lengkap, tanggal lahir, hingga foto yang menunjukkan rumah atau sekolah. Memahami apa itu data pribadi adalah langkah pertama untuk melindungi privasi dan keamanan diri di dunia digital.",
        bagian: [
            {
                judul: "Pengertian dan Ciri Data Pribadi",
                paragraf: "Menurut Undang-Undang Perlindungan Data Pribadi (UU PDP), data pribadi adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi, baik secara langsung maupun tidak langsung. Data dianggap 'dapat diidentifikasi' jika seseorang bisa dikenali dari kombinasi beberapa informasi, meskipun nama lengkapnya tidak disebutkan.",
                poin: [
                    "Identitas diri: nama lengkap, nama ibu kandung, tanggal dan tempat lahir, nomor induk kependudukan (NIK).",
                    "Kontak: nomor telepon, alamat email, alamat rumah, dan akun media sosial.",
                    "Keuangan: nomor rekening, kartu kredit, riwayat transaksi, dan informasi gaji.",
                    "Sensitif: data kesehatan, biometrik (sidik jari, wajah), dan keyakinan atau agama.",
                    "Perilaku: riwayat pencarian, lokasi, dan kebiasaan penggunaan aplikasi."
                ]
            },
            {
                judul: "Siapa yang Mengumpulkan Data Pribadi?",
                paragraf: "Data pribadi tidak hanya dipegang oleh platform media sosial. Banyak pihak dapat mengumpulkan, menyimpan, dan menggunakan data kita — kadang dengan izin, kadang tanpa kita sadari.",
                poin: [
                    "Platform media sosial dan aplikasi: mengumpulkan data profil, aktivitas, lokasi, dan perangkat untuk menampilkan iklan yang relevan.",
                    "Pengiklan dan perusahaan analitik: membeli data perilaku pengguna untuk menyusun profil konsumen.",
                    "Pihak ketiga: aplikasi yang meminta izin akses kontak, galeri, atau lokasi.",
                    "Peretas dan pelaku kejahatan: mencuri data melalui phishing, malware, atau kebocoran database."
                ]
            },
            {
                judul: "Risiko Jika Data Pribadi Bocor",
                paragraf: "Ketika data pribadi jatuh ke tangan yang salah, dampaknya bisa sangat serius — bukan hanya untuk akun digital, tetapi juga kehidupan nyata.",
                poin: [
                    "Penipuan identitas: orang lain bisa menggunakan data kamu untuk membuka akun, meminjam uang, atau bertransaksi atas namamu.",
                    "Pencurian akun: kombinasi email atau nama pengguna dan informasi pribadi memudahkan peretas membobol akun.",
                    "Cyberbullying dan doxxing: data pribadi yang tersebar bisa dipakai untuk melecehkan atau mengancam.",
                    "Spam dan penipuan bertarget: penipu menggunakan detail pribadi (nama, sekolah, pekerjaan) agar pesan terlihat meyakinkan.",
                    "Kerugian finansial: penyalahgunaan data kartu, rekening, atau kode OTP bisa menguras uang."
                ]
            },
            {
                judul: "Cara Mengurangi Data yang Dibagikan",
                paragraf: "Prinsip paling aman: bagikan seminimal mungkin. Setiap informasi yang kamu unggah adalah potongan puzzle yang bisa dirangkai orang lain untuk mengenalimu.",
                poin: [
                    "Isi profil media sosial secukupnya; hindari menampilkan alamat rumah, tanggal lahir lengkap, atau nomor telepon.",
                    "Periksa dan batasi izin aplikasi — cabut akses yang tidak diperlukan.",
                    "Gunakan nama alias atau nama panggilan jika tidak wajib memakai nama asli.",
                    "Hindari mengunggah foto dokumen penting seperti KTP, kartu pelajar, atau struk yang memuat data pribadi.",
                    "Rutin periksa pengaturan privasi dan bagian 'Informasi Pribadi' pada setiap akun."
                ]
            }
        ],
        contoh: [
            { judul: "Kuis dan aplikasi 'iseng'", teks: "Aplikasi kuis di media sosial sering meminta tanggal lahir, nama ibu kandung, atau nama sekolah pertama. Jawaban-jawaban itu sebenarnya adalah pertanyaan umum pemulihan kata sandi di banyak layanan." },
            { judul: "Foto KTP dan dokumen", teks: "Mengunggah foto KTP 'sekadar untuk verifikasi' atau membagikan struk belanja yang memuat nama, alamat, dan nomor telepon memberi peretas bahan lengkap untuk penipuan." },
            { judul: "Check-in lokasi", teks: "Fitur check-in yang menampilkan rumah, sekolah, atau tempat nongkrong secara rutin bisa dimanfaatkan untuk melacak rutinitas dan lokasi seseorang." }
        ],
        istilah: [
            { istilah: "Data Pribadi", arti: "Informasi yang berkaitan dengan orang yang dapat diidentifikasi secara langsung maupun tidak langsung." },
            { istilah: "Data Sensitif", arti: "Data pribadi yang jika bocor berisiko tinggi menimbulkan diskriminasi atau kerugian, misalnya data kesehatan dan biometrik." },
            { istilah: "UU PDP", arti: "Undang-Undang Perlindungan Data Pribadi, regulasi yang mengatur pemrosesan data pribadi di Indonesia." },
            { istilah: "Enkripsi", arti: "Pengamanan data dengan mengubahnya menjadi kode yang hanya bisa dibaca oleh pihak berwenang." },
            { istilah: "Profiling", arti: "Proses mengumpulkan dan menganalisis data untuk menyusun gambaran perilaku seseorang, sering untuk keperluan iklan." }
        ],
        tips: [
            "Biasakan diri bertanya: 'Apakah informasi ini perlu diketahui orang lain?' sebelum mengunggah.",
            "Pisahkan email untuk keperluan penting (sekolah, bank) dan email untuk pendaftaran aplikasi atau acara.",
            "Simpan dokumen identitas dalam bentuk digital yang aman, jangan difoto dan disimpan di galeri biasa.",
            "Aktifkan notifikasi login agar kamu tahu jika akun diakses dari perangkat asing.",
            "Jika data pribadi sudah terlanjur tersebar, segera ganti kata sandi dan waspadai pesan penipuan yang mengaku dari layanan terkait."
        ]
    },
    {
        judul: "Jejak Digital",
        paragraf: "Setiap kali kamu membuka media sosial, mengirim pesan, mencari di Google, atau bertransaksi online, kamu meninggalkan jejak. Jejak digital ibarat tinta yang tidak bisa dihapus sempurna — dan bisa dibaca bertahun-tahun kemudian, baik oleh teman, sekolah, calon tempat kerja, maupun orang yang berniat jahat.",
        bagian: [
            {
                judul: "Pengertian Jejak Digital",
                paragraf: "Jejak digital (digital footprint) adalah rekaman seluruh aktivitas seseorang saat menggunakan internet dan teknologi digital. Jejak ini tercipta secara otomatis oleh server, platform, dan perangkat — bahkan ketika kita merasa 'tidak melakukan apa-apa'.",
                poin: [
                    "Dibuat oleh semua aktivitas online: unggahan, komentar, like, pencarian, dan tontonan.",
                    "Tersimpan di banyak tempat: server platform, cloud, perangkat sendiri, dan pihak ketiga.",
                    "Bisa bersifat aktif (sengaja dibagikan) maupun pasif (tercatat otomatis).",
                    "Sulit dihapus total karena salinan data bisa tersebar di banyak server."
                ]
            },
            {
                judul: "Jenis-Jenis Jejak Digital",
                paragraf: "Jejak digital dibedakan berdasarkan cara pembentukannya, dan masing-masing punya karakteristik berbeda.",
                poin: [
                    "Jejak aktif: informasi yang sengaja kamu bagikan — foto, status, komentar, ulasan, dan profil publik.",
                    "Jejak pasif: data yang tercatat tanpa tindakan sadar — alamat IP, waktu online, riwayat pencarian, dan cookie.",
                    "Jejak internal: data yang disimpan di perangkat sendiri, seperti riwayat browsing dan file unduhan.",
                    "Jejak pihak ketiga: data yang dikumpulkan aplikasi, situs web, dan pengiklan tentang perilakumu."
                ]
            },
            {
                judul: "Di Mana Jejak Digital Tersimpan?",
                paragraf: "Banyak orang mengira menghapus unggahan berarti jejak hilang. Kenyataannya, jejak bisa tersimpan jauh lebih luas daripada yang dibayangkan.",
                poin: [
                    "Platform media sosial: server menyimpan unggahan, komentar, dan log aktivitas meskipun sudah 'dihapus'.",
                    "Mesin pencari: Google dan sejenisnya mengarsipkan halaman web dan profil publik.",
                    "Pihak ketiga: pengiklan, broker data, dan aplikasi lain bisa menyimpan salinan informasi.",
                    "Perangkat dan cloud: screenshot, riwayat chat, dan backup bisa menyimpan jejak lama.",
                    "Orang lain: screenshot dan tangkapan layar bisa disebarkan oleh siapa pun."
                ]
            },
            {
                judul: "Dampak Jejak Digital bagi Kehidupan",
                paragraf: "Jejak digital bersifat permanen dan dapat memengaruhi masa depan — terutama bagi pelajar yang akan melamar sekolah, beasiswa, atau pekerjaan.",
                poin: [
                    "Reputasi digital: unggahan lama yang tidak pantas bisa muncul kembali saat melamar kerja atau masuk perguruan tinggi.",
                    "Peluang yang hilang: banyak institusi memeriksa media sosial calon siswa, mahasiswa, dan karyawan.",
                    "Risiko privasi: kombinasi unggahan bisa dipakai untuk doxxing, pelecehan, atau penipuan.",
                    "Manipulasi iklan: profil perilaku menentukan iklan apa yang terus ditampilkan kepadamu.",
                    "Tekanan sosial: riwayat aktivitas bisa dipakai untuk mem-blackmail atau mempermalukan."
                ]
            }
        ],
        contoh: [
            { judul: "Unggahan masa kecil", teks: "Foto atau komentar yang diunggah bertahun-tahun lalu bisa ditemukan lewat pencarian nama saat seseorang melamar kerja — karena unggahan tidak benar-benar hilang." },
            { judul: "Riwayat pencarian", teks: "Kata kunci yang pernah dicari (misalnya tentang masalah kesehatan atau keuangan) bisa disimpan dan dianalisis untuk kepentingan iklan atau data broker." },
            { judul: "Momen viral yang disalahartikan", teks: "Satu komentar yang di-screenshot dan disebarkan bisa berubah makna dan merusak reputasi, meskipun konteks aslinya berbeda." }
        ],
        istilah: [
            { istilah: "Digital Footprint", arti: "Jejak digital, yaitu seluruh jejak aktivitas seseorang di internet." },
            { istilah: "Cookie", arti: "File kecil yang disimpan situs web untuk mengingat preferensi dan melacak perilaku pengguna." },
            { istilah: "Data Broker", arti: "Perusahaan yang mengumpulkan, mengolah, dan menjual data pribadi dari berbagai sumber." },
            { istilah: "Screenshot", arti: "Tangkapan layar yang bisa menyimpan dan menyebarkan konten tanpa izin pemiliknya." },
            { istilah: "Reputasi Digital", arti: "Citra seseorang di dunia maya yang dibentuk dari jejak dan aktivitas online." }
        ],
        tips: [
            "Anggap setiap unggahan bersifat permanen — pikirkan baik-baik sebelum menekan tombol 'posting'.",
            "Lakukan audit digital: cari namamu di mesin pencari dan periksa apa yang muncul.",
            "Kelola akun lama: hapus atau nonaktifkan akun yang sudah tidak dipakai.",
            "Batasi siapa yang bisa melihat unggahan — gunakan mode privat bila perlu.",
            "Berhati-hati dengan aplikasi pihak ketiga yang meminta akses ke kontak atau galeri."
        ]
    },
    {
        judul: "Ancaman Digital",
        paragraf: "Ancaman digital adalah segala bentuk upaya atau kondisi yang dapat membahayakan data, akun, dan privasi pengguna internet. Ancaman ini datang dalam berbagai bentuk — dari pesan penipuan sederhana hingga serangan siber yang canggih — dan sering menargetkan kelengahan atau kepercayaan pengguna.",
        bagian: [
            {
                judul: "Pengertian Ancaman Digital",
                paragraf: "Ancaman digital mencakup semua risiko keamanan yang muncul karena penggunaan teknologi dan internet. Ancaman bisa datang dari luar (peretas, penipu) maupun dari dalam (kebiasaan tidak aman dan kurangnya pengetahuan).",
                poin: [
                    "Bertujuan mencuri data, uang, atau kontrol atas akun.",
                    "Memanfaatkan kelemahan teknis maupun kelemahan manusia (human error).",
                    "Sering menyamar sebagai pihak tepercaya: bank, perusahaan, teman, atau figur otoritas.",
                    "Bisa terjadi kapan saja — serangan tidak memilih waktu."
                ]
            },
            {
                judul: "Jenis-Jenis Ancaman Digital",
                paragraf: "Memahami jenis ancaman membantu kita mengenali dan menghindarinya. Berikut ancaman yang paling umum dihadapi pengguna media sosial.",
                poin: [
                    "Phishing: pesan palsu (email, SMS, DM) yang mengarahkan ke situs tiruan untuk mencuri kata sandi, OTP, atau data kartu.",
                    "Malware: perangkat lunak berbahaya seperti virus, trojan, dan ransomware yang merusak atau mencuri data.",
                    "Social Engineering: manipulasi psikologis agar korban sukarela memberikan informasi rahasia — misalnya penipu yang menyamar sebagai customer service.",
                    "Doxxing: penyebaran data pribadi seseorang (alamat, nomor HP, sekolah) tanpa izin untuk melecehkan.",
                    "Cyberbullying: perundungan lewat internet, termasuk komentar jahat, penyebaran aib, dan ancaman.",
                    "Hoaks dan misinformasi: berita palsu yang dirancang untuk menipu, menghasut, atau mengambil untung.",
                    "Scam dan penipuan online: tawaran hadiah, investasi bodong, dan lowongan kerja palsu."
                ]
            },
            {
                judul: "Modus Operandi Penipu Digital",
                paragraf: "Penipu digital hampir selalu memakai pola yang sama — menciptakan urgensi, otoritas, atau iming-iming keuntungan agar korban bertindak tanpa berpikir.",
                poin: [
                    "Urgensi: 'Akunmu diblokir!', 'Segera verifikasi!', 'Hanya berlaku 1 jam!'",
                    "Otoritas palsu: menyamar sebagai bank, polisi, pemerintah, atau perusahaan resmi.",
                    "Iming-iming: hadiah, cuan besar, beasiswa, atau lowongan dengan gaji tidak masuk akal.",
                    "Ketakutan: ancaman akun ditutup, denda, atau masalah hukum jika tidak segera bertindak.",
                    "Link dan lampiran mencurigakan: tautan pendek, domain mirip ejaan resmi, atau file yang harus diunduh."
                ]
            },
            {
                judul: "Cara Mengenali Pesan Mencurigakan",
                paragraf: "Kebanyakan ancaman bisa dikenali dengan pemeriksaan sederhana sebelum bertindak. Biasakan diri melakukan langkah-langkah ini.",
                poin: [
                    "Periksa pengirim: apakah alamat email atau domain benar-benar resmi?",
                    "Periksa URL: arahkan kursor ke link tanpa mengklik untuk melihat alamat tujuan sebenarnya.",
                    "Waspadai bahasa: typo, tata bahasa buruk, atau sapaan generik seperti 'Kepada nasabah tercinta'.",
                    "Jangan pernah klik link yang meminta kata sandi, OTP, atau data kartu — layanan resmi tidak pernah meminta ini.",
                    "Verifikasi lewat jalur resmi: hubungi layanan terkait lewat aplikasi atau website resmi, bukan link di pesan.",
                    "Gunakan akal sehat: jika penawaran terdengar terlalu bagus untuk jadi kenyataan, kemungkinan besar penipuan."
                ]
            }
        ],
        contoh: [
            { judul: "Pesan 'hadiah' di media sosial", teks: "Akun tidak dikenal mengirim DM: 'Selamat! Kamu memenangkan smartphone. Klik tautan dan masukkan password serta OTP.' Ini pola klasik phishing — OTP yang diberikan langsung membuka akses ke akunmu." },
            { judul: "Email 'dari bank'", teks: "Email mengaku dari bank menyatakan 'transaksi mencurigakan, verifikasi sekarang' dan melampirkan link ke situs tiruan yang tampak persis seperti website bank asli." },
            { judul: "Lowongan kerja bodong", teks: "Penipu menawarkan gaji besar untuk pekerjaan mudah dari rumah, lalu meminta biaya 'pelatihan' atau data rekening untuk pencairan gaji." }
        ],
        istilah: [
            { istilah: "Phishing", arti: "Penipuan dengan menyamar sebagai pihak tepercaya untuk mencuri informasi rahasia." },
            { istilah: "Malware", arti: "Perangkat lunak berbahaya yang dapat merusak sistem atau mencuri data." },
            { istilah: "OTP", arti: "One-Time Password, kode sekali pakai untuk verifikasi — jangan pernah dibagikan kepada siapapun." },
            { istilah: "Social Engineering", arti: "Teknik manipulasi untuk membuat korban menyerahkan informasi rahasia secara sukarela." },
            { istilah: "Doxxing", arti: "Publikasi data pribadi seseorang tanpa izin untuk tujuan melecehkan." },
            { istilah: "Hoaks", arti: "Berita atau informasi palsu yang disebarkan untuk menipu atau mengambil untung." }
        ],
        tips: [
            "Aktifkan verifikasi dua faktor (2FA) di semua akun penting.",
            "Jangan pernah membagikan kata sandi, OTP, atau kode verifikasi — termasuk kepada yang mengaku customer service.",
            "Laporkan pesan mencurigakan lewat fitur 'laporkan' di platform dan beri tahu orang tua atau guru.",
            "Instal aplikasi hanya dari toko resmi (Play Store atau App Store), jangan dari link sembarang.",
            "Selalu perbarui sistem dan aplikasi untuk menambal celah keamanan.",
            "Simpan bukti pesan penipuan (screenshot) untuk dilaporkan ke pihak berwenang bila perlu."
        ]
    },
    {
        judul: "Perlindungan Data",
        paragraf: "Melindungi data pribadi bukanlah tugas yang rumit — sebagian besar hanya butuh kebiasaan baik dan pengaturan yang tepat. Dengan langkah-langkah sederhana ini, risiko akun dibajak dan data bocor bisa ditekan sangat jauh.",
        bagian: [
            {
                judul: "Kata Sandi yang Kuat",
                paragraf: "Kata sandi adalah gembok pertama akunmu. Gembok yang lemah bisa dibuka dalam hitungan detik oleh program otomatis.",
                poin: [
                    "Panjang minimal 12 karakter — makin panjang makin aman.",
                    "Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol.",
                    "Hindari kata yang mudah ditebak: nama, tanggal lahir, 'password123', atau urutan keyboard.",
                    "Gunakan kata sandi unik untuk setiap akun — jangan pakai satu sandi untuk semua.",
                    "Simpan sandi dengan password manager, bukan di catatan atau chat."
                ]
            },
            {
                judul: "Autentikasi Dua Faktor (2FA)",
                paragraf: "2FA menambahkan lapisan kedua setelah kata sandi — biasanya kode dari aplikasi, SMS, atau kunci fisik. Meski sandi bocor, akun tetap aman karena penyerang butuh kode kedua.",
                poin: [
                    "Jenis 2FA: aplikasi authenticator (paling aman), SMS atau email (lebih baik daripada tidak ada), dan security key.",
                    "Aktifkan di akun penting: email, media sosial, perbankan, dan akun sekolah.",
                    "Simpan kode pemulihan di tempat aman — jangan simpan di perangkat yang sama.",
                    "Waspadai phishing 2FA: penipu bisa membuat halaman palsu yang meniru permintaan kode."
                ]
            },
            {
                judul: "Pengaturan Privasi di Media Sosial",
                paragraf: "Platform media sosial menyediakan pengaturan untuk membatasi siapa yang melihat dan menemukanmu. Manfaatkan sebaik mungkin.",
                poin: [
                    "Set akun ke mode privat: hanya pengikut yang disetujui yang bisa melihat unggahan.",
                    "Batasi siapa yang bisa mengirim pesan atau komentar.",
                    "Matikan pelacakan lokasi dan izinkan akses hanya saat diperlukan.",
                    "Periksa aplikasi yang terhubung dan cabut akses yang tidak diperlukan.",
                    "Gunakan nama samaran untuk akun pribadi bila memungkinkan."
                ]
            },
            {
                judul: "Kebiasaan Aman Sehari-hari",
                paragraf: "Selain pengaturan, kebiasaan harian menentukan seberapa aman akunmu saat beraktivitas online.",
                poin: [
                    "Selalu logout dari perangkat umum (komputer sekolah, warnet).",
                    "Hati-hati dengan WiFi publik — hindari transaksi penting atau login akun penting di jaringan tidak aman.",
                    "Jangan klik link atau unduh file dari pengirim tidak dikenal.",
                    "Periksa 'sesi aktif' di akun secara berkala dan keluarkan perangkat asing.",
                    "Backup data penting secara berkala agar tidak hilang saat darurat.",
                    "Berani menolak permintaan data yang tidak perlu dari aplikasi atau situs web."
                ]
            }
        ],
        contoh: [
            { judul: "Sandi lemah vs sandi kuat", teks: "Sandi lemah: 'Ilham123' — mudah ditebak dan bisa di-crack dalam hitungan detik. Sandi kuat: 'Kopi$Riang_2024!' — panjang, acak, dan unik untuk satu akun saja." },
            { judul: "Aktifkan 2FA", teks: "Meski kata sandi media sosialmu bocor, penyerang tetap tidak bisa masuk karena mereka butuh kode 2FA yang hanya ada di HP-mu." },
            { judul: "Akun media sosial privat", teks: "Dengan mode privat, unggahan hanya terlihat oleh pengikut yang kamu setujui — mengurangi risiko doxxing dan pelecehan dari orang asing." }
        ],
        istilah: [
            { istilah: "Password Manager", arti: "Aplikasi untuk membuat dan menyimpan kata sandi kuat secara terenkripsi." },
            { istilah: "2FA", arti: "Autentikasi dua faktor, lapisan keamanan tambahan selain kata sandi." },
            { istilah: "Enkripsi", arti: "Pengamanan data dengan mengubahnya menjadi kode yang tidak bisa dibaca pihak lain." },
            { istilah: "VPN", arti: "Virtual Private Network, alat yang menyembunyikan alamat IP dan mengamankan koneksi di WiFi publik." },
            { istilah: "Backup", arti: "Salinan cadangan data agar tetap ada saat data asli hilang atau rusak." }
        ],
        tips: [
            "Pasang autentikasi dua faktor hari ini juga — gratis dan hanya butuh beberapa menit.",
            "Periksa kekuatan kata sandi di password manager atau fitur pemeriksa bawaan browser.",
            "Jangan pernah memasukkan kata sandi atau kartu di situs yang alamatnya tidak diawali 'https'.",
            "Aktifkan notifikasi keamanan agar kamu tahu jika ada login mencurigakan.",
            "Buat rutinitas bulanan: periksa akun aktif, sesi login, dan izin aplikasi."
        ]
    },
    {
        judul: "Etika Digital",
        paragraf: "Etika digital adalah panduan perilaku yang sopan, aman, dan bertanggung jawab saat berkomunikasi dan berbagi informasi di internet. Teknologi membuat kita bisa terhubung dengan siapa pun — tetapi tanpa etika, koneksi itu bisa berubah menjadi senjata untuk menyakiti orang lain.",
        bagian: [
            {
                judul: "Pengertian Etika Digital",
                paragraf: "Etika digital mengatur cara kita memperlakukan orang lain di ruang maya — sama seperti etika dalam kehidupan nyata, hanya saja dampaknya bisa lebih luas dan permanen karena jejak digital.",
                poin: [
                    "Berperilaku sopan dan menghargai perasaan orang lain.",
                    "Bertanggung jawab atas setiap unggahan, komentar, dan share.",
                    "Menghormati privasi dan batasan orang lain.",
                    "Kritis terhadap informasi dan tidak menyebarkan hoaks."
                ]
            },
            {
                judul: "Prinsip-Prinsip Etika Digital",
                paragraf: "Lima prinsip utama yang bisa dipakai sebagai panduan saat beraktivitas di media sosial dan internet.",
                poin: [
                    "Hormat privasi: jangan membagikan foto, percakapan, atau data orang lain tanpa izin.",
                    "Verifikasi sebelum share: pastikan informasi benar sebelum menyebarkannya.",
                    "Hindari ujaran kebencian: tidak menghina, melecehkan, atau mendiskriminasi berdasarkan suku, agama, gender, atau latar belakang.",
                    "Jangan menyebarkan aib: hindari mempermalukan orang lain dengan screenshot atau konten yang diambil keluar konteks.",
                    "Akui kesalahan: jika salah, hapus dan minta maaf — jangan menyalahkan korban."
                ]
            },
            {
                judul: "Dampak Pelanggaran Etika Digital",
                paragraf: "Pelanggaran etika digital bisa berakibat serius — baik secara hukum maupun sosial, dan sering kali tidak bisa dibatalkan.",
                poin: [
                    "Cyberbullying bisa menyebabkan depresi, trauma, dan dalam kasus ekstrem mendorong korban ke tindakan ekstrem.",
                    "Penyebaran konten tanpa izin bisa melanggar hukum (UU ITE) dan berujung pidana.",
                    "Ujaran kebencian dan hoaks bisa memicu konflik sosial dan perpecahan.",
                    "Reputasi rusak: pelaku pelecehan digital bisa kehilangan kepercayaan komunitas dan peluang.",
                    "Relasi rusak: komentar kasar atau tidak pantas bisa merusak persahabatan dan kepercayaan."
                ]
            },
            {
                judul: "Menjadi Netizen yang Bertanggung Jawab",
                paragraf: "Menjadi warga digital yang baik bukan hal yang sulit — cukup dengan kesadaran dan kemauan untuk berpikir sebelum bertindak.",
                poin: [
                    "Tanya pada diri sendiri: 'Apakah postingan ini bisa menyakiti seseorang?'",
                    "Berempati: sebelum berkomentar, bayangkan bagaimana rasanya berada di posisi orang lain.",
                    "Berani melapor: jika melihat perundungan atau konten berbahaya, gunakan fitur laporan.",
                    "Dukung, jangan menyebarkan: jika teman mengalami masalah, bantu — jangan ikut menyebarkan.",
                    "Ingat: layar bukan perisai — apa yang ditulis di internet bisa ditelusuri dan berdampak nyata."
                ]
            }
        ],
        contoh: [
            { judul: "Membagikan foto teman tanpa izin", teks: "Memposting foto teman dalam keadaan memalukan tanpa seizinya adalah pelanggaran privasi — meski 'cuma untuk lucu-lucuan', dampaknya bisa sangat menyakitkan." },
            { judul: "Menyebarkan hoaks", teks: "Membagikan berita palsu tentang bencana atau kesehatan bisa menimbulkan panik dan kerugian — satu share kamu bisa menjangkau ratusan orang." },
            { judul: "Komentar kasar di kolom publik", teks: "Komentar sindiran atau ejekan di akun publik bisa memicu perundungan massal dan merusak reputasi semua pihak." }
        ],
        istilah: [
            { istilah: "Ujaran Kebencian (Hate Speech)", arti: "Ekspresi yang menyerang atau mendiskriminasi seseorang berdasarkan identitas." },
            { istilah: "Netizen", arti: "Warga internet, sebutan untuk pengguna layanan online." },
            { istilah: "UU ITE", arti: "Undang-Undang Informasi dan Transaksi Elektronik, regulasi hukum tindak pidana siber di Indonesia." },
            { istilah: "Cancel Culture", arti: "Praktik memboikot atau mengucilkan seseorang secara sosial karena perbuatan online." },
            { istilah: "Digital Empathy", arti: "Kemampuan memahami dan merasakan perasaan orang lain dalam interaksi digital." }
        ],
        tips: [
            "Terapkan prinsip jeda: tunggu sebelum mengirim komentar yang emosional.",
            "Kalau ragu apakah konten pantas dibagikan, jangan dibagikan.",
            "Gunakan fitur 'Batasi' atau 'Sembunyikan' untuk menghindari konten yang tidak ingin kamu lihat.",
            "Edukasi teman yang berperilaku tidak pantas — terkadang cukup dengan mengingatkan dengan baik.",
            "Ingat tujuanmu di media sosial: belajar, terhubung, dan berkarya — bukan melukai orang lain."
        ]
    },
    {
        judul: "Hukum & Regulasi Perlindungan Data",
        paragraf: "Di Indonesia, perlindungan data pribadi kini diatur oleh undang-undang khusus. Memahami hak dan kewajiban ini penting — baik untuk melindungi dirimu sebagai pengguna, maupun untuk memahami konsekuensi hukum dari perbuatan digital.",
        bagian: [
            {
                judul: "UU Perlindungan Data Pribadi (UU PDP)",
                paragraf: "UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) adalah payung hukum utama yang mengatur pemrosesan data pribadi di Indonesia. Undang-undang ini mengakui bahwa data pribadi adalah hak yang harus dilindungi negara.",
                poin: [
                    "Berlaku bagi semua pihak yang memproses data pribadi: perusahaan, instansi pemerintah, dan perorangan.",
                    "Memberi hak kepada pemilik data: hak mengakses, memperbaiki, menghapus, dan menarik persetujuan.",
                    "Mewajibkan pengendali data meminta persetujuan sebelum mengumpulkan dan memproses data.",
                    "Menetapkan sanksi administratif hingga denda miliaran rupiah dan sanksi pidana bagi pelanggaran serius."
                ]
            },
            {
                judul: "UU ITE dan Tindak Pidana Siber",
                paragraf: "Selain UU PDP, UU ITE (Undang-Undang Informasi dan Transaksi Elektronik) mengatur berbagai delik yang terjadi di ruang digital — dari pencemaran nama baik hingga akses ilegal ke sistem.",
                poin: [
                    "Pencemaran atau penistaan: menghina atau memfitnah seseorang lewat internet.",
                    "Konten asusila dan perundungan: penyebaran konten intim tanpa izin atau cyberbullying.",
                    "Akses ilegal: membobol akun, mengubah data, atau menyebarkan virus.",
                    "Hoaks yang menimbulkan kerugian: penyebaran informasi palsu yang terbukti merugikan.",
                    "Sanksi bisa berupa denda hingga pidana penjara, tergantung jenis dan dampak pelanggaran."
                ]
            },
            {
                judul: "Hak Kamu sebagai Pemilik Data",
                paragraf: "Sebagai subjek data, kamu memiliki sejumlah hak yang bisa dituntut kepada pihak yang mengelola datamu.",
                poin: [
                    "Hak akses: mengetahui data apa saja yang disimpan tentangmu.",
                    "Hak koreksi: meminta perbaikan data yang salah atau sudah usang.",
                    "Hak penghapusan ('right to be forgotten'): meminta data dihapus dalam kondisi tertentu.",
                    "Hak menarik persetujuan: menghentikan pemrosesan data yang sebelumnya kamu setujui.",
                    "Hak portabilitas: meminta salinan data yang kamu berikan dalam format yang mudah dibaca."
                ]
            },
            {
                judul: "Konsekuensi Hukum bagi Pelaku",
                paragraf: "Banyak yang mengira 'di internet bebas' — padahal setiap unggahan dan perbuatan digital bisa dijangkau hukum. Beberapa contoh nyata:",
                poin: [
                    "Menyebarkan foto atau video intim seseorang tanpa izin bisa dipidana penjara dan denda berat.",
                    "Membuat dan menyebarkan hoaks yang menimbulkan kerugian nyata bisa dijerat pasal UU ITE.",
                    "Perusahaan yang membocorkan data pengguna bisa dikenai denda miliaran rupiah berdasarkan UU PDP.",
                    "Komentar yang mengandung ujaran kebencian bisa berujung tuntutan pidana."
                ]
            }
        ],
        contoh: [
            { judul: "Kebocoran data platform Indonesia", teks: "Beberapa marketplace, fintech, dan lembaga pendidikan di Indonesia pernah mengalami kebocoran data jutaan pengguna. Korban berhak menuntut ganti rugi, dan perusahaan bisa didenda berdasarkan UU PDP." },
            { judul: "Revenge porn", teks: "Menyebarkan foto atau video intim mantan pasangan tanpa seizin adalah delik pidana — pelakunya bisa dipenjara dan didenda, bukan sekadar di-'cancel' di media sosial." }
        ],
        istilah: [
            { istilah: "Subjek Data", arti: "Orang yang datanya diproses — yaitu kamu sebagai pengguna layanan." },
            { istilah: "Pengendali Data", arti: "Pihak yang menentukan tujuan dan cara pemrosesan data pribadi." },
            { istilah: "Right to be Forgotten", arti: "Hak untuk meminta penghapusan data pribadi dari sistem." },
            { istilah: "Delik Siber", arti: "Tindak pidana yang dilakukan melalui atau terhadap sistem komputer." },
            { istilah: "Persetujuan (Consent)", arti: "Izin yang diberikan subjek data sebelum datanya diproses oleh pihak lain." }
        ],
        tips: [
            "Selalu baca syarat dan kebijakan privasi sebelum mendaftar di layanan baru.",
            "Jika merasa datamu disalahgunakan, simpan bukti dan laporkan ke platform serta lembaga berwenang.",
            "Jangan pernah menyebarkan foto, video, atau data pribadi orang lain tanpa izin — itu bisa berujung pidana.",
            "Kenali hak-hakmu sebagai pemilik data; jangan ragu menanyakan ke perusahaan apa yang mereka simpan tentangmu."
        ]
    },
    {
        judul: "Literasi Digital & Deteksi Hoaks",
        paragraf: "Literasi digital adalah kemampuan untuk menggunakan teknologi secara aman, kritis, dan bertanggung jawab. Di era informasi yang melimpah, kemampuan membedakan mana yang benar dan mana yang palsu menjadi keterampilan paling penting — terutama di media sosial tempat hoaks menyebar lebih cepat daripada berita resmi.",
        bagian: [
            {
                judul: "Apa itu Literasi Digital?",
                paragraf: "Literasi digital bukan sekadar bisa memakai aplikasi — melainkan kemampuan berpikir kritis terhadap informasi, memahami dampak perilaku online, dan menggunakan teknologi untuk kebaikan.",
                poin: [
                    "Literasi keamanan: melindungi diri dari ancaman digital seperti phishing dan malware.",
                    "Literasi kritis: mengevaluasi kebenaran informasi sebelum percaya atau membagikan.",
                    "Literasi etika: berperilaku sopan dan bertanggung jawab di ruang maya.",
                    "Literasi teknis: memahami cara kerja aplikasi, privasi, dan pengaturan akun."
                ]
            },
            {
                judul: "Metode SIFT untuk Memeriksa Fakta",
                paragraf: "SIFT adalah metode praktis yang dikembangkan pakar literasi digital untuk mengecek kebenaran sebuah informasi. Empat langkah mudah ini bisa dipakai siapa saja.",
                poin: [
                    "Stop (Berhenti): jangan langsung percaya atau share — beri jeda sebelum bereaksi.",
                    "Investigate the source (Selidiki sumber): siapa yang membuat konten ini? Apa reputasinya?",
                    "Find better coverage (Cari berita lain): bandingkan dengan laporan dari sumber tepercaya lainnya.",
                    "Trace to original (Lacak ke sumber asli): cek apakah ada konteks atau tanggal yang hilang dari konten asli.",
                    "Alat bantu: reverse image search (Google Lens) untuk memeriksa asal sebuah foto."
                ]
            },
            {
                judul: "Tanda-Tanda Hoaks dan Misinformasi",
                paragraf: "Hoaks dirancang untuk memancing emosi — makin kuat emosi yang ditimbulkan, makin cepat ia menyebar. Kenali ciri-cirinya.",
                poin: [
                    "Judul provokatif: berlebihan, huruf kapital semua, atau menimbulkan panik dan amarah.",
                    "Foto dan video editan: gambar yang dipotong konteksnya atau hasil manipulasi.",
                    "Sumber tidak jelas: tidak ada penulis, tanggal, atau rujukan yang bisa diverifikasi.",
                    "Meminta untuk segera disebarkan: 'SEGERA SHARE SEBELUM DIHAPUS!' adalah tanda bahaya klasik.",
                    "Konten lama disajikan sebagai baru: foto atau berita bertahun-tahun lalu diklaim sebagai kejadian terkini.",
                    "Emosi ekstrem: konten yang membuatmu marah, takut, atau iba sebelum berpikir."
                ]
            },
            {
                judul: "Deepfake dan Konten Manipulasi AI",
                paragraf: "Kemajuan AI memungkinkan pembuatan video dan audio palsu yang sangat realistis — disebut deepfake. Ini ancaman baru yang membuat 'melihat bukan lagi berarti percaya'.",
                poin: [
                    "Deepfake: video atau audio yang dibuat AI meniru wajah dan suara seseorang seolah-olah ia benar-benar berkata atau melakukan sesuatu.",
                    "Tanda mencurigakan: gerakan bibir tidak sinkron, pencahayaan aneh, artefak visual di wajah, atau suara yang terdengar datar.",
                    "Verifikasi penting: sebelum percaya video 'skandal' atau 'pengakuan' seseorang, cek dari sumber resmi dan media kredibel.",
                    "Hati-hati menyebarkan: membagikan konten deepfake tanpa verifikasi ikut menyebarkan manipulasi."
                ]
            }
        ],
        contoh: [
            { judul: "Hoaks kesehatan viral", teks: "Pesan berantai mengklaim 'ramuan herbal menyembuhkan penyakit X' dengan foto yang mengaku dari ahli. Setelah dicek, foto itu hasil editan dan klaimnya tidak didukung riset medis." },
            { judul: "Foto bencana yang diedit", teks: "Foto banjir diklaim sebagai kejadian di kotamu padahal berasal dari daerah lain bertahun lalu — tujuannya memancing kepanikan dan engagement." }
        ],
        istilah: [
            { istilah: "Literasi Digital", arti: "Kemampuan menggunakan teknologi secara aman, kritis, dan bertanggung jawab." },
            { istilah: "SIFT", arti: "Metode empat langkah (Stop, Investigate, Find, Trace) untuk memeriksa kebenaran informasi." },
            { istilah: "Misinformasi", arti: "Informasi salah yang disebarkan tanpa kesadaran bahwa itu keliru." },
            { istilah: "Disinformasi", arti: "Informasi salah yang sengaja disebarkan untuk menipu." },
            { istilah: "Deepfake", arti: "Konten audio atau video palsu yang dibuat dengan kecerdasan buatan." },
            { istilah: "Clickbait", arti: "Judul provokatif yang bertujuan memancing klik, sering kali menyesatkan." }
        ],
        tips: [
            "Terapkan SIFT setiap kali ragu — hanya butuh satu atau dua menit sebelum memutuskan share atau tidak.",
            "Biasakan reverse image search untuk foto yang mengklaim kejadian besar.",
            "Cek tanggal konten — banyak hoaks memakai foto lama dengan klaim baru.",
            "Kalau konten memancing emosi kuat, itu sinyal untuk lebih waspada, bukan langsung bereaksi.",
            "Diskusikan dengan teman atau guru sebelum membagikan konten yang meragukan."
        ]
    },
    {
        judul: "Studi Kasus Nyata",
        paragraf: "Belajar dari kasus nyata membantu kita memahami bahwa ancaman digital bukan sekadar teori — ada korban nyata di sekitar kita, termasuk di Indonesia. Mari pelajari beberapa kasus besar dan pelajaran yang bisa diambil.",
        bagian: [
            {
                judul: "Kebocoran Data dalam Skala Besar",
                paragraf: "Kebocoran data (data breach) terjadi ketika informasi pribadi tersimpan bocor ke pihak yang tidak berhak — baik karena kelalaian perusahaan maupun serangan peretas.",
                poin: [
                    "Cambridge Analytica: data jutaan pengguna Facebook disalahgunakan untuk kampanye politik tanpa persetujuan — menunjukkan betapa berharganya data perilaku.",
                    "Kebocoran data platform Indonesia: beberapa marketplace, fintech, dan lembaga pendidikan pernah mengalami kebocoran data jutaan pengguna.",
                    "Gangguan sistem perbankan: insiden seperti gangguan BSI 2021 membuat layanan lumpuh dan data nasabah berisiko terekspos.",
                    "Pelajaran: data yang kamu berikan ke satu platform bisa tersebar jauh lebih luas dari yang kamu kira."
                ]
            },
            {
                judul: "Pembajakan Akun dan Penipuan",
                paragraf: "Akun media sosial dan email adalah pintu masuk ke identitas digital seseorang. Begitu dikuasai, penipu bisa menipu teman dan keluarga korban.",
                poin: [
                    "Hack Twitter 2020: akun-akun terkenal seperti Obama dan Musk dibajak melalui rekayasa sosial terhadap karyawan — pelaku berhasil menipu jutaan dolar lewat tweet palsu tentang Bitcoin.",
                    "Penipuan OTP: modus paling umum — korban dihubungi 'petugas' yang meminta kode OTP, lalu akun langsung dikuras.",
                    "SIM swap: penipu menyamar sebagai pemilik nomor HP di gerai operator untuk mengambil alih nomor dan akun yang terhubung.",
                    "Pelajaran: kode OTP adalah kunci — jangan pernah memberikannya, dan aktifkan 2FA agar akun tidak mudah dibajak."
                ]
            },
            {
                judul: "Perundungan dan Doxxing Digital",
                paragraf: "Teknologi juga disalahgunakan untuk menyakiti orang lain — dari komentar jahat hingga publikasi data pribadi tanpa izin.",
                poin: [
                    "Doxxing: penyebaran alamat rumah, nomor HP, dan sekolah seseorang untuk melecehkan — sering berujung kekerasan nyata di dunia fisik.",
                    "Cyberbullying: perundungan berulang lewat komentar, DM, atau grup — korban bisa mengalami trauma dan depresi.",
                    "Penyebaran konten intim (revenge porn): foto atau video pribadi disebar untuk mempermalukan — di Indonesia ini delik pidana.",
                    "Pelajaran: di balik layar ada manusia dengan perasaan — empati dan etika digital bukan pilihan, melainkan kewajiban."
                ]
            },
            {
                judul: "Pola Umum di Balik Semua Kasus",
                paragraf: "Jika diperhatikan, hampir semua kasus besar memiliki pola yang sama — dan semuanya bisa dicegah dengan kebiasaan yang sudah kamu pelajari.",
                poin: [
                    "Kelengahan: korban mengklik link, membuka lampiran, atau memberikan OTP tanpa berpikir.",
                    "Kurangnya lapisan keamanan: akun tanpa 2FA lebih mudah dibajak daripada yang aktif.",
                    "Oversharing: terlalu banyak data pribadi dibagikan sehingga identitas mudah dipalsukan.",
                    "Kurangnya literasi: hoaks dan pesan penipuan dipercaya karena tidak diverifikasi.",
                    "Solusinya sudah kamu kuasai: waspada, verifikasi, lindungi akun, dan terapkan etika digital."
                ]
            }
        ],
        contoh: [
            { judul: "Twitter hack 2020 — detail", teks: "Peretas menyamar sebagai tim IT Twitter lalu menipu karyawan agar memberikan akses admin. Dalam hitungan jam, lebih dari 130 akun terkenal dibajak dan penipu 'menjual' Bitcoin palsu kepada pengikut mereka." },
            { judul: "Kebocoran data BSI 2021 — dampak", teks: "Gangguan sistem membuat jutaan nasabah tidak bisa bertransaksi dan data pribadi berisiko tersebar. Insiden ini menjadi pelajaran penting tentang pentingnya keamanan infrastruktur dan transparansi perusahaan." }
        ],
        istilah: [
            { istilah: "Data Breach", arti: "Kebocoran data, yaitu akses atau pencurian data pribadi oleh pihak tidak berhak." },
            { istilah: "Rekayasa Sosial", arti: "Manipulasi psikologis untuk membuat korban menyerahkan akses atau informasi." },
            { istilah: "SIM Swap", arti: "Penipuan dengan mengambil alih nomor HP korban melalui operator seluler." },
            { istilah: "Revenge Porn", arti: "Penyebaran konten intim seseorang tanpa izin untuk mempermalukan." },
            { istilah: "Dampak Domino", arti: "Efek berantai di mana satu kelemahan kecil bisa menyebabkan kerugian besar." }
        ],
        tips: [
            "Ingat: kamu bukan target 'kecil' — akun media sosial biasa sering jadi sasaran pertama karena lebih mudah dibobol.",
            "Terapkan semua materi yang sudah dipelajari: lindungi data, kenali ancaman, perkuat akun, dan jaga etika.",
            "Bagikan pengetahuan ini kepada teman dan keluarga — keamanan digital adalah tanggung jawab bersama.",
            "Tetap waspada dan terus belajar — dunia digital terus berubah, begitu juga ancamannya."
        ]
    }
];

const soalKuis = [
    {
        tanya: "Informasi berikut yang termasuk data pribadi adalah ...",
        opsi: [
            "Warna kesukaan",
            "Alamat rumah dan nomor telepon",
            "Nama tokoh dalam film",
            "Judul lagu populer"
        ],
        benar: 1,
        pembahasan: "Alamat rumah dan nomor telepon dapat digunakan untuk mengenali atau menghubungi seseorang."
    },
    {
        tanya: "Apa yang dimaksud dengan jejak digital?",
        opsi: [
            "Rekaman aktivitas seseorang di internet",
            "Kumpulan file di komputer saja",
            "Sinyal jaringan internet",
            "Perangkat untuk mengakses media sosial"
        ],
        benar: 0,
        pembahasan: "Jejak digital adalah rekaman aktivitas yang ditinggalkan ketika menggunakan internet."
    },
    {
        tanya: "Pesan yang meminta kata sandi dan kode OTP melalui tautan mencurigakan kemungkinan merupakan ...",
        opsi: [
            "Pembaruan resmi",
            "Phishing",
            "Pesan biasa",
            "Iklan edukasi"
        ],
        benar: 1,
        pembahasan: "Phishing berusaha menipu pengguna agar memberikan informasi rahasia seperti kata sandi atau OTP."
    },
    {
        tanya: "Salah satu cara meningkatkan keamanan akun adalah ...",
        opsi: [
            "Menggunakan satu kata sandi untuk semua akun",
            "Membagikan OTP kepada teman",
            "Mengaktifkan autentikasi dua faktor",
            "Menuliskan kata sandi di kolom komentar"
        ],
        benar: 2,
        pembahasan: "Autentikasi dua faktor menambahkan lapisan pemeriksaan saat seseorang masuk ke akun."
    },
    {
        tanya: "Sikap yang tepat ketika menerima berita yang belum jelas kebenarannya adalah ...",
        opsi: [
            "Langsung membagikannya",
            "Mengubah isi berita",
            "Memeriksa sumber dan kebenarannya",
            "Mengirimkannya ke semua grup"
        ],
        benar: 2,
        pembahasan: "Periksa sumber dan kebenaran informasi sebelum membagikannya kepada orang lain."
    },
    {
        tanya: "Prinsip CIA dalam keamanan informasi adalah singkatan dari ...",
        opsi: [
            "Cookies, Information, Authentication",
            "Confidentiality, Integrity, Availability",
            "Cyber, Internet, Antivirus",
            "Create, Inspect, Analyze"
        ],
        benar: 1,
        pembahasan: "CIA Triad terdiri dari kerahasiaan (Confidentiality), integritas (Integrity), dan ketersediaan (Availability)."
    },
    {
        tanya: "Undang-undang yang khusus mengatur perlindungan data pribadi di Indonesia adalah ...",
        opsi: [
            "UU ITE",
            "UU PDP",
            "UU Perlindungan Konsumen",
            "UU Kesehatan"
        ],
        benar: 1,
        pembahasan: "UU PDP (UU Nomor 27 Tahun 2022) mengatur pemrosesan data pribadi dan memberi hak kepada pemilik data."
    },
    {
        tanya: "Teknologi yang dapat memalsukan video atau suara seseorang sehingga tampak dan terdengar nyata disebut ...",
        opsi: [
            "Deepfake",
            "Filter",
            "Live streaming",
            "Podcast"
        ],
        benar: 0,
        pembahasan: "Deepfake adalah konten audio atau video palsu yang dibuat dengan kecerdasan buatan untuk meniru seseorang."
    },
    {
        tanya: "Jika akun media sosialmu dibajak, langkah pertama yang paling tepat adalah ...",
        opsi: [
            "Membuat postingan untuk memperingatkan teman",
            "Segera gunakan fitur pemulihan resmi dan ganti kata sandi",
            "Mengirim pesan ke semua kontak",
            "Membuat akun baru dengan data yang sama"
        ],
        benar: 1,
        pembahasan: "Gunakan fitur pemulihan resmi platform untuk mengambil alih akun kembali, lalu segera ganti kata sandi dan periksa aktivitas mencurigakan."
    }
];

let nomorSoalAktif = 0;
let skorKuis = 0;
let sudahMenjawab = false;

// LOGIN

function login() {
    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim();

    if (!nama) {
        namaInput.focus();
        alert("Silakan masukkan nama terlebih dahulu.");
        return;
    }

    const role = document.getElementById("role").value;

    document.getElementById("sapaan").textContent =
        `Selamat Datang, ${nama}!`;

    document.getElementById("login").hidden = true;
    document.getElementById("website").hidden = false;

    document.title = `DataGuard Pro | ${role}`;

    window.location.hash = "dashboard";
}

function logout() {
    document.getElementById("website").hidden = true;
    document.getElementById("login").hidden = false;
    document.getElementById("nama").value = "";

    document.title = "DataGuard Pro | Keamanan Data";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// MATERI

function bukaMateri(index) {
    const materi = materiData[index];

    if (!materi) return;

    document.getElementById("judulMateri").textContent =
        materi.judul;

    const isi = document.getElementById("isiMateri");
    isi.replaceChildren();

    const intro = document.createElement("p");
    intro.className = "materi-intro";
    intro.textContent = materi.paragraf;
    isi.appendChild(intro);

    materi.bagian.forEach((bagian) => {
        const subjudul = document.createElement("h3");
        subjudul.className = "materi-subjudul";
        subjudul.textContent = bagian.judul;
        isi.appendChild(subjudul);

        const paragraf = document.createElement("p");
        paragraf.className = "materi-teks";
        paragraf.textContent = bagian.paragraf;
        isi.appendChild(paragraf);

        const daftar = document.createElement("ul");
        daftar.className = "materi-poin";

        bagian.poin.forEach((teks) => {
            const item = document.createElement("li");
            item.textContent = teks;
            daftar.appendChild(item);
        });

        isi.appendChild(daftar);
    });

    if (materi.contoh && materi.contoh.length) {
        const kotakContoh = document.createElement("div");
        kotakContoh.className = "info-box contoh-box";

        const judulContoh = document.createElement("h4");
        judulContoh.textContent = "Contoh dalam Kehidupan Nyata";
        kotakContoh.appendChild(judulContoh);

        materi.contoh.forEach((contoh) => {
            const item = document.createElement("div");
            item.className = "contoh-item";
            const judulItem = document.createElement("strong");
            judulItem.textContent = contoh.judul;
            item.appendChild(judulItem);

            const teksItem = document.createElement("p");
            teksItem.textContent = contoh.teks;
            item.appendChild(teksItem);

            kotakContoh.appendChild(item);
        });

        isi.appendChild(kotakContoh);
    }

    if (materi.istilah && materi.istilah.length) {
        const kotakIstilah = document.createElement("div");
        kotakIstilah.className = "info-box istilah-box";

        const judulIstilah = document.createElement("h4");
        judulIstilah.textContent = "Istilah Penting";
        kotakIstilah.appendChild(judulIstilah);

        materi.istilah.forEach((istilah) => {
            const item = document.createElement("div");
            item.className = "istilah-item";

            const namaIstilah = document.createElement("strong");
            namaIstilah.textContent = istilah.istilah;
            item.appendChild(namaIstilah);

            const artiIstilah = document.createElement("span");
            artiIstilah.textContent = ` — ${istilah.arti}`;
            item.appendChild(artiIstilah);

            kotakIstilah.appendChild(item);
        });

        isi.appendChild(kotakIstilah);
    }

    if (materi.tips && materi.tips.length) {
        const kotakTips = document.createElement("div");
        kotakTips.className = "info-box tips-box";

        const judulTips = document.createElement("h4");
        judulTips.textContent = "Tips Praktis";
        kotakTips.appendChild(judulTips);

        const daftarTips = document.createElement("ul");
        daftarTips.className = "materi-poin";

        materi.tips.forEach((teks) => {
            const item = document.createElement("li");
            item.textContent = teks;
            daftarTips.appendChild(item);
        });

        kotakTips.appendChild(daftarTips);
        isi.appendChild(kotakTips);
    }

    const detail = document.getElementById("materiDetail");
    detail.hidden = false;

    detail.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function tutupMateri() {
    document.getElementById("materiDetail").hidden = true;
}

// ANALISIS

function analisis() {
    const totalKebiasaan = document.querySelectorAll(".habit").length;
    const jumlah = document.querySelectorAll(".habit:checked").length;
    const nilai = Math.round((jumlah / totalKebiasaan) * 100);

    let status;
    let saran;

    if (nilai >= 80) {
        status = "Sangat Baik";
        saran = "Kebiasaan keamanan digitalmu sudah baik. Pertahankan dan tetap waspada terhadap ancaman baru.";
    } else if (nilai >= 60) {
        status = "Cukup Baik";
        saran = "Kebiasaanmu cukup baik. Tingkatkan beberapa langkah perlindungan yang belum dilakukan.";
    } else if (nilai >= 40) {
        status = "Perlu Ditingkatkan";
        saran = "Masih ada beberapa kebiasaan penting yang perlu diterapkan untuk melindungi akun dan data pribadi.";
    } else {
        status = "Perlu Perhatian";
        saran = "Mulailah dengan membuat kata sandi kuat, menjaga OTP, dan mengaktifkan autentikasi dua faktor.";
    }

    document.getElementById("nilai").textContent = `${nilai}%`;
    document.getElementById("status").textContent = status;

    document.getElementById("saran").textContent =
        `${jumlah} dari ${totalKebiasaan} kebiasaan sudah dilakukan. ${saran}`;

    // Rincian persentase per kebiasaan
    const rincian = document.getElementById("rincian");
    rincian.replaceChildren();

    const bobot = 100 / totalKebiasaan;
    const formatBobot = bobot.toFixed(1).replace(".", ",");

    document.querySelectorAll(".habit").forEach((checkbox) => {
        const label = checkbox.closest("label");
        const teks = label
            ? label.textContent.trim()
            : "Kebiasaan";
        const terpenuhi = checkbox.checked;

        const baris = document.createElement("div");
        baris.className =
            `rincian-item ${terpenuhi ? "lolos" : "belum"}`;

        const ikon = document.createElement("span");
        ikon.className = "rincian-ikon";
        ikon.textContent = terpenuhi ? "✓" : "✗";

        const nama = document.createElement("span");
        nama.className = "rincian-nama";
        nama.textContent = teks;

        const persen = document.createElement("span");
        persen.className = "rincian-persen";
        persen.textContent = terpenuhi
            ? `+${formatBobot}%`
            : "0%";

        baris.append(ikon, nama, persen);
        rincian.appendChild(baris);
    });

    const catatan = document.createElement("p");
    catatan.className = "rincian-catatan";
    catatan.textContent =
        `Setiap kebiasaan bernilai ${formatBobot}% dari nilai akhir.`;
    rincian.appendChild(catatan);
}

// SIMULASI PHISHING

function jawab(benar) {
    const hasil = document.getElementById("hasilSimulasi");

    if (benar) {
        hasil.textContent =
            "Benar! Jangan klik tautan mencurigakan atau membagikan kata sandi dan OTP. Abaikan serta laporkan pesan tersebut.";
    } else {
        hasil.textContent =
            "Belum tepat. Pesan hadiah yang meminta kata sandi atau OTP merupakan tanda bahaya. Jangan klik tautan dan jangan berikan data rahasia.";
    }
}

// KUIS

function tampilkanSoal() {
    const soal = soalKuis[nomorSoalAktif];

    sudahMenjawab = false;

    document.getElementById("nomorSoal").textContent =
        `Pertanyaan ${nomorSoalAktif + 1} dari ${soalKuis.length}`;

    document.getElementById("progressBar").style.width =
        `${(nomorSoalAktif / soalKuis.length) * 100}%`;

    document.getElementById("pertanyaan").textContent =
        soal.tanya;

    document.getElementById("feedback").textContent = "";

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = true;

    nextBtn.textContent =
        nomorSoalAktif === soalKuis.length - 1
            ? "Lihat Hasil"
            : "Berikutnya →";

    const pilihan = document.getElementById("pilihan");
    pilihan.replaceChildren();

    soal.opsi.forEach((opsi, index) => {
        const tombol = document.createElement("button");

        tombol.type = "button";
        tombol.textContent =
            `${String.fromCharCode(65 + index)}. ${opsi}`;

        tombol.addEventListener("click", () => {
            pilihJawaban(index, tombol);
        });

        pilihan.appendChild(tombol);
    });
}

function pilihJawaban(index, tombolDipilih) {
    if (sudahMenjawab) return;

    sudahMenjawab = true;

    const soal = soalKuis[nomorSoalAktif];

    const tombolSemua =
        document.querySelectorAll("#pilihan button");

    tombolSemua.forEach((tombol) => {
        tombol.disabled = true;
    });

    tombolDipilih.classList.add("selected");

    if (index === soal.benar) {
        skorKuis++;

        document.getElementById("feedback").textContent =
            `Benar! ${soal.pembahasan}`;
    } else {
        document.getElementById("feedback").textContent =
            `Belum tepat. Jawaban yang benar adalah ${String.fromCharCode(65 + soal.benar)}. ${soal.pembahasan}`;
    }

    document.getElementById("nextBtn").disabled = false;
}

function berikutnya() {
    if (!sudahMenjawab) return;

    if (nomorSoalAktif < soalKuis.length - 1) {
        nomorSoalAktif++;
        tampilkanSoal();
    } else {
        tampilkanHasilKuis();
    }
}

function tampilkanHasilKuis() {
    const nilaiAkhir =
        Math.round((skorKuis / soalKuis.length) * 100);

    document.getElementById("nomorSoal").textContent =
        "Evaluasi selesai";

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("pertanyaan").textContent =
        `Skor kamu: ${skorKuis} dari ${soalKuis.length} (${nilaiAkhir}%)`;

    const pilihan = document.getElementById("pilihan");
    pilihan.replaceChildren();

    const ulang = document.createElement("button");
    ulang.type = "button";
    ulang.className = "primary-button";
    ulang.textContent = "Ulangi Kuis";
    ulang.addEventListener("click", mulaiUlangKuis);

    pilihan.appendChild(ulang);

    document.getElementById("feedback").textContent =
        nilaiAkhir >= 80
            ? "Hebat! Pemahamanmu tentang keamanan data sudah sangat baik."
            : nilaiAkhir >= 60
                ? "Bagus. Pelajari kembali materi untuk meningkatkan hasilmu."
                : "Terus belajar. Baca kembali materi keamanan data, lalu coba kuis sekali lagi.";

    document.getElementById("nextBtn").disabled = true;
    document.getElementById("nextBtn").textContent = "Selesai";
}

function mulaiUlangKuis() {
    nomorSoalAktif = 0;
    skorKuis = 0;
    tampilkanSoal();
}

// SAAT HALAMAN SELESAI DIMUAT

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            login();
        }
    );

    document.getElementById("logoutBtn").addEventListener(
        "click",
        logout
    );

    document.getElementById("analysisBtn").addEventListener(
        "click",
        analisis
    );

    document.getElementById("nextBtn").addEventListener(
        "click",
        berikutnya
    );

    tampilkanSoal();
});

// Fungsi untuk tombol HTML

window.login = login;
window.bukaMateri = bukaMateri;
window.tutupMateri = tutupMateri;
window.analisis = analisis;
window.jawab = jawab;
window.berikutnya = berikutnya;
