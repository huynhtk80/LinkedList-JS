import LinkedList from "./LinkedList.js";

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldhead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldhead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });
  describe("with index 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
  describe("with index in the middle", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      expect(ll.getByIndex(3).value).toBe(40);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("insert at head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("insert at given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      ll.insertAtIndex(2, 60);
      expect(ll.length).toBe(5);
      expect(ll.getByIndex(2).value).toBe(60);
      expect(ll.getByIndex(2).next.value).toBe(30);
    });
  });
});

describe("#removeHead", () => {
  describe("removes the head", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      ll.removeHead();
      expect(ll.length).toBe(4);
      expect(ll.head.value).toBe(20);
    });
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("remove at head", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(0);
      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
    });
  });

  describe("with index in middle", () => {
    test("remove node at index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60);
      ll.removeAtIndex(3);
      expect(ll.length).toBe(5);
      expect(ll.getByIndex(3).value).toBe(40);
      expect(ll.head.getByIndex(3).value).toBe(50);
    });
  });
});
