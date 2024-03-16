---
title: 'Flutter Widget'
description: 'Hello Flutter!'
pubDate: 'Mar 16 2024'
heroImage: '\flutter-widget-test\hero.jpg'
---

## **เกริ่นนำ**

สวัดดีครับ ผู้ที่หลงเข้ามาใช้ Flutter ผมก็เป็นหนึ่งในผู้ที่หลงเข้ามา วันนี้จะมาเล่าเกี่ยวกับ Flutter Widget ซึ่งถ้าหากคุณเผลอมาแตะ Flutter แล้วก็ขาดไม่ได้ที่จะต้องใช้สิ่งที่เรียก "Widget" ที่เป็นเหมือน พระเอก ใน Flutter

## **อะไรคือ Widget ใน Flutter?**

เริ่มกันที่ Widget คืออะไร ลองจินตนาการถึง LEGO ที่เราสามารถต่อมันเข้าด้วยกันให้เป็นรูปเป็นร่างแบบที่ใจเราต้องการได้ เช่นมี LEGO ธรรมดาหรือชนิดที่มีความสามารถพิเศษขยับได้เคลื่อนไหวได้แล้วก็พอเอามารวมกันก็สรรค์สร้างได้ตามแต่จินตนาการของเรา

เหมือน Widget ใน Flutter ที่มีมาให้หลายๆ แบบให้เราเอามาต่อกันแบบที่เราต้องการและสามารถขยับตำแหน่งได้(positioning) มีความสามารถพิเศษของมันเอง เช่น กดได้(Button), ขยับได้(Slider)


![https://www.nico71.fr/product/steam-machine-pneumatic/](https://www.nico71.fr/wp-content/uploads/2022/10/Lego-Technic-Steam-Engine-Machine-2.jpg)

## **Types of Widgets**

ลองมาดูจักรวาลของ Flutter ที่หน้าตาคล้าย LEGO กัน มีชิ้นส่วนหน้าตาหลักๆ อยู่ 2 ประเภท `StatelessWidget` และ `StatefulWidget` แต่ละประเภทก็มีรูปร่างและสีสันเฉพาะตัวในโลกของ Flutter

### **StatelessWidget**

[![Hello My Name is .... Display Brick - Custom Printed 2 x 4 Brick –  Minifigs.me](https://minifigs.me/cdn/shop/products/hello-mynameis-blank_d1fb5bc0-848f-4d84-8b56-0c445d45a0ca.jpg?v=1580215830)](https://minifigs.me/products/hello-my-name-is-display-brick-custom-printed-2x4-lego-brick)

แบบแรกคือ **StatelessWidget** ลองคิดว่าเป็นบล็อกง่ายๆ เชื่อได้เลยว่าไม่มีวันเปลี่ยนหมายความว่ามันจะวางตรงไหนก็หน้าตาเดิมสีเดิมตำแหน่งเดิมตลอด ด้านล่างคือตัวอย่างง่ายๆ ของ **StatelessWidget**

```dart
class WelcomeMessage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text('Welcome to Flutter!');
  }
}
```

โค้ดด้านบนคือตัวอย่าง Widget `WelcomeMessage` ลองคิดว่ามันคือชิ้นที่จะแสดงคำว่า **"Welcome to Flutter!"** ตลอดไม่ว่ามันจะวางตรงไหน

### **StatefulWidget**

[![Lego Technic Binary Counting Machine - You have to see this fascinating  counting machine - YouTube](https://i.ytimg.com/vi/OarbhtaqUlI/maxresdefault.jpg)](https://www.youtube.com/watch?v=OarbhtaqUlI)

แบบต่อมาที่อยากแนะนำคือ **StatefulWidget** ถ้ามันอยู่ในโลกของ LEGO ลองคิดว่ามันคือชิ้นส่วนที่ขยับได้เหมือนพวก **LEGO Technic** มีเฟืองมีแกนขยับได้เปลี่ยนแปลงได้ เพิ่มสีสันให้ LEGO คุณ ด้านล่างคือตัวอย่างโค้ดของ **StatefulWidget**

```dart
class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text('Counter: $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
```

โค้ดด่านบนดูน่ากลัว เดี่ยวมาลองอธิบายกันดู ด้านบนคือ คือ Widget `Counter` จะมีข้อความ "Counter: `number`" คอยบอกตัวเลข และกดเพิ่มตัวเลขได้ด้วยการกดปุ่ม "Increment" ซึ่งตัวเลขก็จะเพิ่มขึ้นแบบไดนามิก

---

จบแล้วขอบคุณทุกคนครับที่หลงเข้ามาอ่านกับเรื่องของ Widget ในโลกของ Flutter