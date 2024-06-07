import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Ajusta el ancho de la imagen
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    color: '#333',
    fontFamily: 'Helvetica',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 20,
    color: '#333',
  },
  headerDetails: {
    fontSize: 12,
    color: '#333',
  },
  tableContainer: {
    marginTop: 20,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderBottomStyle: 'solid',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderBottomStyle: 'solid',
  },
  tableColHeader: {
    width: '35%',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  tableColHeaderc: {
    width: '55%',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  tableCol: {
    width: '35%',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
  },
  tableColC: {
    width: '55%',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  summaryText: {
    fontSize: 12,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    color: '#999',
  },
  bold: {
    fontWeight: 'bold',
  },
  titleBackground: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    width: 100, // Ajusta el ancho de la imagen aquí
    height: 'auto',
    marginBottom: 10,
  },
});

const Recibo = ({data}) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} src="../../../public/icon.png" />
          <Text style={styles.headerDetails}>Dona Facil </Text>
          <Text style={styles.headerDetails}>Sistema de donacion y registro</Text>
          <Text style={styles.headerDetails}>Universidad Mayor de San Andres</Text>
        </View>
        <View>
          <Text style={[styles.header, styles.titleBackground]}>REGISTRO DE USUARIO</Text>
          <Text style={styles.headerDetails}>Fecha: {formattedDate}</Text>
          {/* <Text style={styles.headerDetails}>No. de recibo: 001</Text> */}
        </View>
      </View>
      
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableColHeader}>id</Text>
            <Text style={styles.tableColHeader}>Usuario</Text>
            <Text style={styles.tableColHeader}>Nombre</Text>
            <Text style={styles.tableColHeader}> Paterno</Text>
            <Text style={styles.tableColHeader}> Materno</Text>
            <Text style={styles.tableColHeaderc}>Correo</Text>
          </View>
          {data.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.id_user}</Text>
              <Text style={styles.tableCol}>{item.user}</Text>
              <Text style={styles.tableCol}>{item.nombre}</Text>
              <Text style={styles.tableCol}>{item.apellido_pat}</Text>
              <Text style={styles.tableCol}>{item.apellido_mat}</Text>
              <Text style={styles.tableColC}>{item.correo}</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* <View style={styles.summaryContainer}>
        <View>
          <Text style={styles.summaryText}><Text style={styles.bold}>SUBTOTAL:</Text> $40.00</Text>
          <Text style={styles.summaryText}><Text style={styles.bold}>IMPUESTOS:</Text> 0.00%</Text>
          <Text style={styles.summaryText}><Text style={styles.bold}>TOTAL:</Text> $40.00</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerDetails}>Método de pago: Transferencia bancaria</Text>
        <Text style={styles.headerDetails}>Información de Pago:</Text>
        <Text style={styles.headerDetails}>Rimberio y asociados</Text>
        <Text style={styles.headerDetails}>Banco Cualquiera</Text>
        <Text style={styles.headerDetails}>Cuenta: 0123456789</Text>
      </View>

      <Text style={styles.footer}>Gracias por su compra.</Text> */}
    </Page>
  </Document>
)};

export default Recibo;
