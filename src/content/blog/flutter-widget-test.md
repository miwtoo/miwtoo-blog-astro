---
title: 'Flutter Widget Test'
description: 'more test in Flutter!'
pubDate: 'Mar 16 2024'
heroImage: 'https://images.unsplash.com/photo-1615085457637-425d9b184c99?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
---

สวัดดีครับ วันนี้มาแนะนำให้รู้จักกับ การเขียน Test บน Fluttet

# ทำไมต้องเขียน Test

การเขียน test นั้นเป็นสิ่งที่ควรทำ เพื่อสร้างความมั้นใจว่าโค้ดของเรานั้นทำงานได้ถูกต้อง ไม่พังตอนทำงานจริง นึกภาพหากเราเป็นพ่อครัวทำอาหารแล้วไม่ได้ชิมอาหารก่อนไปเสริฟเราก็จะไม่รู้ว่าอาหารเราเค็มไป หรือ หวานไปหรือเปล่า ในการพัตนาแอพหลายๆครั้งการพังตอนใช้งานมีความเสี่ยงตั้งแต่ทำให้ผู้ใช้อารมเสียไม่อยากกลับมาใช้งานอีก หรือ สมัยนี้มีรถที่สามารถขับให้เราได้ถ้าซอฟแวพังก็หมายถึงชีวิตคนได้เลย

![LET'S TEST IN PRODUCTION - Disaster Girl | Make a Meme](https://media.makeameme.org/created/lets-test-in.jpg)

---

# Library สำหรับ test

เข้าเรื่องกัน Flutter นั้น มี library สำหรับเขียน Test ให้อยู่แล้ว ดูเอกสารได้ที่ [https://docs.flutter.dev/testing](https://docs.flutter.dev/testing)  
ทาง Flutter มีให้ทั้งทั้ง Unit testing, Widget testing, Integration testing แถมยังบอกข้อดีข้อเสียให้

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689997949158/98ec58a7-2dc4-436a-9c44-214a92df9a03.png)

## Widget tests

วันนี้เราจะมาดู Widget tests กัน หรือ ที่ frameworks อื่นเค้าเรียก component test กัน  
เป้าหมายของ widget test คือใน ตัว widget ของเราทำงานได้ถูกต้อง เช่น แสดงข้อความถูกต้อง หรือ กดปุ่มได้  

## **Flutter Widget Test Code Example**

มาลงมือทำจริงกันเลยดีกว่า ผมจะแนะนำให้รู้จักกับ Widget ที่ชื่อว่า **PizzaOrderButton** ที่มีการทำงานง่ายๆ อย่างจะนับจำนวนเพิ่ม +1 ทุกครั้งที่กด เหมือนเรากดสั่ง Pizza

```dart
class PizzaOrderButton extends StatefulWidget {
  @override
  _PizzaOrderButtonState createState() => _PizzaOrderButtonState();
}

class _PizzaOrderButtonState extends State<PizzaOrderButton> {
  int _orderCount = 0;

  void _incrementOrder() {
    setState(() {
      _orderCount++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _incrementOrder,
      child: Text('Order pizza ($_orderCount)'),
    );
  }
}
```

มาดูตัวอย่างการเขียน test widget ด้านบนกัน

```dart
void main() {
  testWidgets('PizzaOrderButton increments counter and changes text when pressed', (WidgetTester tester) async {
    // Arrange: Create the widget
    await tester.pumpWidget(MaterialApp(home: PizzaOrderButton()));

    // Assert: Check that the button starts at 0
    expect(find.text('Order pizza (0)'), findsOneWidget);

    // Act: Simulate a button press
    await tester.tap(find.byType(ElevatedButton));
    await tester.pumpAndSettle();

    // Assert: Verify that the counter increments and the button text changes
    expect(find.text('Order pizza (1)'), findsOneWidget);
  });
}
```

Full code Example  
[https://zapp.run/edit/zy2c06pry2d0](https://zapp.run/edit/zy2c06pry2d0?theme=dark&lazy=false)