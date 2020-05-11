==========================
Lowongan: 
==========================
sequelize model:generate 
--name 
Lowongan 
--attributes
    posisi:string,
    syarat:text,
    cabang:string,
    gaji:string,
    kategori:string,
    --------------------
    perusahaanId:integer

==========================
Perusahaan: 
==========================
sequelize model:generate
 --name 
Perusahaan 
--attributes 
    nama:string,
    lokasi:string,
    deskripsi:text,
    email:string,
    password:string

==========================
Pelamar: 
==========================
sequelize model:generate
--name 
Pelamar 
--attributes 
    nama:string,
    kelamin:string,
    telp:string,
    email:string,
    password:string,
    alamat:text

==========================
Lamaran: 
==========================
sequelize model:generate
 --name 
Lamaran 
--attributes 
    status:string,
    ------------------
    pelamarId:integer,
    lowonganId:integer

==========================
Role: (Belum kebuat)
==========================
sequelize model:generate 
--name 
Role 
--attributes 
    id:integer,
    name:string

=============================================================================================================

sequelize model:generate --name Lowongan --attributes posisi:string,syarat:text,cabang:string,gaji:string,kategori:string,perusahaanId:integer

sequelize model:generate --name Perusahaan --attributes nama:string,lokasi:string,deskripsi:text,email:string,password:string

sequelize model:generate --name Pelamar --attributes nama:string,kelamin:string,telp:string,email:string,password:string,alamat:text

sequelize model:generate --name Lamaran --attributes status:string,pelamarId:integer,lowonganId:integer