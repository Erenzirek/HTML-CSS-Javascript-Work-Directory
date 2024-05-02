let students = {
    name: 'Eren',
    surname: 'Zirekbilek',
    id: 1548,
    skills: ['React', 'Python', 'Java', 'GraphQL'],
    login() {
        console.log("Erenler");
    },
    logout() {
        console.log("student logged in");
    },

    printLessons() {
        this.skills.forEach(ders => {
            console.log(ders);
        });
    }
};

console.log(students); // students nesnesini konsola yazdırır
console.log(students.name); // 'Eren' yazdırır
console.log(students.id); // 1548 yazdırır
console.log(students['name']); // 'Eren' yazdırır

students.name = 'zehra'; // 'name' özelliğini 'zehra' olarak günceller

console.log(students['name']); // 'zehra' yazdırır

console.log(typeof students); // 'object' yazdırır (students değişkeninin türü)

students.login(); // "Erenler" yazdırır (login metodu çağrılır)
students.logout(); // "student logged in" yazdırır (logout metodu çağrılır)
console.log(this);

students.printLessons();