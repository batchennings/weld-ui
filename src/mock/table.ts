
export const tableData = [
    {
        "id": 1,
        "first_name": "Alysia",
        "last_name": "Ivashechkin",
        "email": "aivashechkin0@example.com",
        "phone": "(424) 8787997",
        "image": "https://picsum.photos/400",
        "numbers": 8834,
        "state": "California",
        "status": "active",
        "city": "Los Angeles",
        "address": "2 Vermont Junction"
    },
    {
        "id": 2,
        "first_name": "Alicia",
        "last_name": "Sworder",
        "email": "asworder1@mozilla.com",
        "phone": "(804) 8988278",
        "image": "https://picsum.photos/400",
        "numbers": 92,
        "status": "active",
        "state": "Virginia",
        "city": "Richmond",
        "address": "362 Hoffman Court"
    }
]
export const tableColumns = [
    {
        header: "ID",
        priority: "secondary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "id"
    },
    {
        header: "First Name",
        priority: "primary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "first_name"
    },
    {
        header: "Last Name",
        priority: "primary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "last_name"
    },
    {
        header: "Email",
        priority: "secondary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "email"
    },
    {
        header: "Phone",
        priority: "primary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "phone"
    },
    {
        header: "State",
        priority: "secondary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "state"
    },
    {
        header: "Numbers",
        priority: "secondary",
        dataType: "numeric",
        hasHeaderLabel: true,
        accessorKey: "numbers"
    },
    {
        header: "City",
        priority: "secondary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "city"
    },
    {
        header: "Address",
        priority: "secondary",
        dataType: "text",
        hasHeaderLabel: true,
        accessorKey: "address"
    },
    {
        header: "Status",
        priority: "primary",
        dataType: "pill",
        hasHeaderLabel: false,
        accessorKey: "status"
    }
]


