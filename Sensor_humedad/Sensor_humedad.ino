int sHum=0;
int hum;
int humP;

void setup()
{\
  Serial.begin(9600);
}

void loop()
{
  hum=analogRead(sHum);
  Serial.print("Humedad: ");
  Serial.println(hum);
  if(hum>=1000)                           // 0-Humedo   1023-Seco
  {
    Serial.println("/ Fuera de suelo /");    
  }
  else if(hum<1000 && hum>=600)
  {
    Serial.println("/ Seco /");
  }
  else if(hum<600 && hum>=370)
  {
    Serial.println("Humedo");
  }
  else if(hum<370)
  {
    Serial.println("Dentro de agua");
  }
  humP=map(hum, 1023, 0, 0, 100);         // Convertir humedad a porcentaje
  Serial.print("<< Humedad: ");
  Serial.print(humP);
  Serial.println("% >>");
  delay(4000);
}
