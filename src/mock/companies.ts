export const companiesData = [
    { id: 1, name: "Acme Corp", ville: "Paris", siret: "73282932000074", postal_code: "75001", status: "active" },
    { id: 2, name: "Globex", ville: "Lyon", siret: "55210055400013", postal_code: "69002", status: "inactive" },
    { id: 3, name: "Initech", ville: "Marseille", siret: "78455987600045", postal_code: "13001", status: "active" },
    { id: 4, name: "Umbrella", ville: "Toulouse", siret: "38946512300027", postal_code: "31000", status: "pending" },
    { id: 5, name: "Soylent", ville: "Bordeaux", siret: "42177896500061", postal_code: "33000", status: "active" }
]

export const companiesColumns = [
    { header: "ID", priority: "secondary", dataType: "text", hasHeaderLabel: true, accessorKey: "id" },
    { header: "Name", priority: "primary", dataType: "text", hasHeaderLabel: true, accessorKey: "name" },
    { header: "Ville", priority: "secondary", dataType: "text", hasHeaderLabel: true, accessorKey: "ville" },
    { header: "SIRET", priority: "secondary", dataType: "text", hasHeaderLabel: true, accessorKey: "siret" },
    { header: "Postal Code", priority: "secondary", dataType: "text", hasHeaderLabel: true, accessorKey: "postal_code" },
    { header: "Status", priority: "primary", dataType: "pill", hasHeaderLabel: false, accessorKey: "status" }
]




