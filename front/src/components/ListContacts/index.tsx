import { IUserContacts } from "@/context/UserContext/types";

interface ListContacts {
  id: string;
  contacts: IUserContacts;
  classes?: string;
}

export default function ListContacts({ id, contacts, classes }: ListContacts) {
  return (
    <li id={id} className={classes}>
      <p>{contacts.name}</p>
      <p>{contacts.telephone}</p>
      <p>{contacts.email}</p>
    </li>
  );
}
