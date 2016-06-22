# grunt-empty
learn grunt by the imooc

[toc]

### javascript中构造函数的返回值问题和new对象的过程

首先明确一点：JavaScript中构造函数是不需要有返回值的，这一点跟Java很类似。可以认为构造函数和普通函数的最大差别就是：构造函数中没有return语句，普通函数可以有return语句；构造函数中会使用this关键字定义成员变量和成员方法，普通的函数不会使用this关键字定义成员变量和方法。

···js
function Person(name,sex)   
{    
        this.name = name;  
    this.sex = sex;  
    //return 1;  
    //return true;  
    //return "aty";  
    return {"returnValue":11};  
}  
  
//new关键字会被认为是创建对象  
var aObj = new Person("11",1);  
alert(aObj.returnValue);//11  
alert(aObj.name);//undefined  

```

构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;如果return的是对象，则返回该对象。

下面简单介绍下，javascript中new对象的过程：如var myObj = newPerson(“aty”,25);

 1.创建一个空的Object对象.var obj = new Object();

 2.将构造函数Person中this指向刚创建的obj对象

 3.将创建的obj的__proto__指向构造函数Person的prototype。这一步是建立对象和原型直接的对应关系。firefox下通过

  对象的__proto__属性能够访问到原型，IE下则没有暴露出相应的属性。

 4.执行构造函数Person()中的代码

> 来源：[http://blog.csdn.net/aitangyong/article/details/39673859](http://blog.csdn.net/aitangyong/article/details/39673859)
