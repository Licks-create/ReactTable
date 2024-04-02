export const db = [
    {
      pending: [
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          riskLevel: "L",
          TriggeredReason: "Unusual activity",
          InQueFor: "1 Day",
          DateAdded: "11 Nov 2023",
          PrevReview: {
            bool: "Yes",
            date: "10 Nov 2023"
          }
        },
        {
          name: "Bob Anderson",
          email: "bob.anderson@example.com",
          riskLevel: "H",
          TriggeredReason: "Multiple failed login attempts",
          InQueFor: "5 Days",
          DateAdded: "8 Nov 2023",
          PrevReview: {
            bool: "No",
            date: "6 Nov 2023"
          }
        },
        {
          name: "Eva Martinez",
          email: "eva.martinez@example.com",
          riskLevel: "M",
          TriggeredReason: "Unusual spending pattern",
          InQueFor: "3 Days",
          DateAdded: "10 Nov 2023",
          PrevReview: {
            bool: "Yes",
            date: "9 Nov 2023"
          }
        },
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          riskLevel: "L",
          TriggeredReason: "Unusual activity",
          InQueFor: "1 Day",
          DateAdded: "11 Nov 2023",
          PrevReview: {
            bool: "Yes",
            date: "10 Nov 2023"
          }
        },
        {
          name: "Bob Anderson",
          email: "bob.anderson@example.com",
          riskLevel: "H",
          TriggeredReason: "Multiple failed login attempts",
          InQueFor: "5 Days",
          DateAdded: "8 Nov 2023",
          PrevReview: {
            bool: "No",
            date: "6 Nov 2023"
          }
        },
        {
          name: "Eva Martinez",
          email: "eva.martinez@example.com",
          riskLevel: "M",
          TriggeredReason: "Unusual spending pattern",
          InQueFor: "3 Days",
          DateAdded: "10 Nov 2023",
          PrevReview: {
            bool: "Yes",
            date: "9 Nov 2023"
          }
        },
      ],
      completed: [
        {
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          riskLevel: "M",
          ActionReason: "Large withdrawal",
          TimeToClose: "2 Days",
          DateAdded: "7 Nov 2023",
          ActionTakenBy: {
            name: "Eva",
            email: "eva@example.com"
          }
        },
        {
          name: "David Taylor",
          email: "david.taylor@example.com",
          riskLevel: "L",
          ActionReason: "Changed contact information",
          TimeToClose: "4 Days",
          DateAdded: "6 Nov 2023",
          ActionTakenBy: {
            name: "Grace",
            email: "grace@example.com"
          }
        },
        {
          name: "Fiona Miller",
          email: "fiona.miller@example.com",
          riskLevel: "H",
          ActionReason: "Account compromise",
          TimeToClose: "1 Day",
          DateAdded: "9 Nov 2023",
          ActionTakenBy: {
            name: "Henry",
            email: "henry@example.com"
          }
        },
        
      ]
    }
  ];
  