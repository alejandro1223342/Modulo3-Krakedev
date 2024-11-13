drop table if exists catalogo;
create table catalogo(
	cat_id serial not null,
	cat_nombre varchar(100) not null,
	cat_descripcion varchar(100) null,
	cat_padre int null,
	CONSTRAINT catalogo_pk primary key (cat_id),
	CONSTRAINT catalogo_fk FOREIGN KEY (cat_padre)
	REFERENCES catalogo(cat_id)
); 


insert into catalogo (cat_nombre,cat_padre)
values('Materia Prima',null);

insert into catalogo (cat_nombre,cat_padre)
values('Proteina',1);

insert into catalogo (cat_nombre,cat_padre)
values('Salsas',1);

insert into catalogo (cat_nombre,cat_padre)
values('Punto de Venta',null), ('Bebidas',4),
('Alcohol',5),('Sin Alcohol',5);

drop table if exists catalogo_unidad_medida;
create table catalogo_unidad_medida(
	cat_id_udm char(1) not null,
	cat_udm_nombre varchar(100) not null,
	CONSTRAINT catalogo_unidad_medida_pk primary key (cat_id_udm)
); 

Insert into catalogo_unidad_medida(cat_id_udm,cat_udm_nombre)
values ('U','Unidades'),('V','Volumen'),('P','Peso');

drop table if exists unidades_medida;
create table unidades_medida(
	udm_id serial not null,
	udm_nombre varchar(100) not null,
	udm_descripcion varchar(100) null,
	cat_id_udm char(1) null,
	CONSTRAINT unidades_medida_pk primary key (udm_id),
	CONSTRAINT catalogoUm_unidades_medida_fk FOREIGN KEY (cat_id_udm)
	REFERENCES catalogo_unidad_medida(cat_id_udm)
); 

Insert into unidades_medida(udm_id,udm_nombre,udm_descripcion,cat_id_udm)
values ('1','ml','mililitros','V'),('2','l','litros','V'),
('3','u','unidad','U'),('4','d','docena','U'),
('5','g','gramos','P'),('6','kg','kilogramos','P'),
('7','lb','libras','P');

drop table if exists producto;
create table producto(
	prod_id serial not null,
	prod_nombre varchar(100) null,
	udm_id int not null,
	prod_precioVenta money not null,
	prod_tieneIva boolean not null,
	prod_coste money not null,
	cat_id_tipoProducto int not null,
	prod_stock int not null,
	CONSTRAINT producto_pk primary key (prod_id),
	CONSTRAINT producto_unidades_medida_fk FOREIGN KEY (udm_id)
	REFERENCES unidades_medida(udm_id),
	CONSTRAINT producto_catalogo_fk FOREIGN KEY (cat_id_tipoProducto)
	REFERENCES catalogo(cat_id)
); 

insert into producto(prod_id,prod_nombre,udm_id,prod_precioVenta,prod_tieneIva,prod_coste,cat_id_tipoProducto,prod_stock)
values ('1','Coca cola pequeña','3','0,50',true,'0,30','7','105'),
('2','Salsa de tomate','6','0,95',true,'0,80','3','0'),
('3','Mostaza','6','0,95',true,'0,80','3','0'),
('4','Fuze tea','3','0,80',true,'0,70','7','49');


create table cabecera_ventas(
	cabv_id serial not null,
	cabv_fecha timestamp not null,
	cabv_totalSinIva money not null,
	cabv_iva money null,
	cabv_total money null,
	CONSTRAINT cabecera_ventas_pk primary key (cabv_id)
); 

insert into cabecera_ventas(cabv_id,cabv_fecha,cabv_totalSinIva,cabv_iva,cabv_total)
values(1,'2023-11-20 20:00:00','3,26','0,39','3,65');

drop table if exists detalle_ventas;
create table detalle_ventas(
	det_id serial not null,
	cabv_id int not null,
	prod_id int not null,
	det_cantidad int not null,
	det_precioVenta money not null,
	det_subtotal money not null,
	det_subtotalConIva money not null,
	CONSTRAINT det_id_pk primary key (det_id),
	CONSTRAINT cabezeraVentas_detalleVentas_fk FOREIGN KEY (cabv_id)
	REFERENCES cabecera_ventas(cabv_id),
	CONSTRAINT cabezeraVentas_producto_fk FOREIGN KEY (prod_id)
	REFERENCES producto(prod_id)
); 

insert into detalle_ventas(det_id,cabv_id,prod_id,det_cantidad,det_precioVenta,det_subtotal,det_subtotalConIva)
values (1,1,1,5,'0,58','2,9','3,25'),
(2,1,4,1,'0,36','0,36','0,40');

drop table if exists historial_stock;
create table historial_stock(
	his_id serial not null,
	his_fecha timestamp not null,
	his_referencia varchar(100) not null,
	prod_id int null,
	his_cantidad int null,
	CONSTRAINT historial_stock_pk primary key (his_id),
	CONSTRAINT historial_producto_fk FOREIGN KEY (prod_id)
	REFERENCES producto(prod_id)
); 

insert into historial_stock(his_id,his_fecha,his_referencia,prod_id,his_cantidad)
values(1,'2023-11-20 19:59:00','PEDIDO 1',1,100),
(2,'2023-11-20 19:59:00','PEDIDO 1',4,50),
(3,'2023-11-20 20:00:00','PEDIDO 2',1,10),
(4,'2023-11-20 20:00:00','VENTA 1',1,-5),
(5,'2023-11-20 20:00:00','VENTA 1',4,1);

drop table if exists estado_pedidos;
create table estado_pedidos(
	est_cod char(1) not null,
	est_descripcion varchar(100) not null,
	CONSTRAINT estado_pedidos_pk primary key (est_cod)
); 

insert into estado_pedidos(est_cod,est_descripcion)
values('S','Solicitado'),('R','Recibido');


drop table if exists catalogo_tipo_documentos;
create table catalogo_tipo_documentos(
	cat_id_tipoDoc char(1) not null,
	cat_nombre varchar(100) not null,
	CONSTRAINT catalogo_tipo_documentos_pk primary key (cat_id_tipoDoc)
); 
insert into catalogo_tipo_documentos(cat_id_tipoDoc,cat_nombre)
values('C','CEDULA'),('R','RUC');

drop table if exists proveedores;
create table proveedores(
	prov_identificador varchar(13) not null,
	cat_id_tipoDoc char(1) not null,
	prov_nombre varchar(100) null,
	prov_telefono varchar(10) null,
	prov_correo varchar(100) null,
	prov_direccion varchar(100) null,
	CONSTRAINT proveedores_pk primary key (prov_identificador),
	CONSTRAINT catalogoDoc_proveedores_fk FOREIGN KEY (cat_id_tipoDoc)
	REFERENCES catalogo_tipo_documentos(cat_id_tipoDoc)
); 

insert into proveedores(prov_identificador,cat_id_tipoDoc,prov_nombre,prov_telefono,prov_correo,prov_direccion)
values ('1792285747','C','SANTIAGO MORQUEZ','0992920306','santi@gmail.com','Cumbayork'),
('1792285747001','R','SNACKS SA','0992920396','snaks@gmail.com','La Tola');

drop table if exists cabecera_pedido;
create table cabecera_pedido(
	cabp_id serial not null,
	prov_identificador varchar(13) not null,
	cabp_fecha date not null,
	est_cod char(1) not null,
	CONSTRAINT cabecera_pedido_pk primary key (cabp_id),
	CONSTRAINT proveedores_cabeceraPedido_fk FOREIGN KEY (prov_identificador)
	REFERENCES proveedores(prov_identificador),
	CONSTRAINT cabeceraPedido_estadoPedidos_fk FOREIGN KEY (prov_identificador)
	REFERENCES proveedores(prov_identificador)
); 

insert into cabecera_pedido(cabp_id,prov_identificador,cabp_fecha,est_cod)
values ('1','1792285747','2023-11-20','R'),
('2','1792285747','2023-11-20','R');

drop table if exists detalle_pedido;
create table detalle_pedido(
	det_id serial not null,
	cabp_id int not null,
	prod_id int not null,
	det_cantidadSolicitada int null,
	det_subtotal money not null,
	det_cantidadRecibida int not null,
	CONSTRAINT detalle_pedido_pk primary key (det_id),
	CONSTRAINT cabeceraPedido_detallePedido_fk FOREIGN KEY (cabp_id)
	REFERENCES cabecera_pedido(cabp_id),
	CONSTRAINT cabeceraPedido_producto_fk FOREIGN KEY (prod_id)
	REFERENCES producto(prod_id)
); 

insert into detalle_pedido(det_id,cabp_id,prod_id,det_cantidadSolicitada,det_subtotal,det_cantidadRecibida)
values(1,1,1,100,'37,29',100),(2,1,4,50,'11,8',50);



select * from cabecera_ventas;
select * from detalle_ventas;
select * from historial_stock;
select * from cabecera_pedido;
select * from detalle_pedido;
select * from catalogo_tipo_documentos;
select * from producto prod
join unidades_medida um on prod.udm_id = um.udm_id;
select * from proveedores;

