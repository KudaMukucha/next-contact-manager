import Link from "next/link";
import { BiMenu, BiUser, BiHelpCircle, BiCog } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button>
          <BiMenu size={28} />
        </button>
        <Link href={"/"}>
          <BiUser size={28} />
        </Link>
        <Link href={"/contacts"}>Contacts</Link>
      </div>

      <div>Search</div>

      <div className="flex items-center gap-3">
        <button>
          <BiMenu size={28} />
        </button>
        <button>
          <BiHelpCircle size={28} />
        </button>
        <button>
          <BiCog size={28} />
        </button>
      </div>
    </div>
  );
}
