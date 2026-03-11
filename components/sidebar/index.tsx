import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Package, PanelBottom, SettingsIcon, ShoppingBag, Users } from "lucide-react";

export function Sidebar() {
  return (
    <>
    {/* div Principal */}
    <div className="flex w-full flex-col bg-muted/40">



        {/* Menu Mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden">
                <PanelBottom className="h-5 w-5" />
                {/* ajuda na acessibilidade de tela */}
                <span className="sr-only">Abrir / Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              
                  <nav className="grid gap-6 text-lg font-medium p-6">
                    <Link
                    href="#"
                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2" 
                    prefetch={false}
                    >
                        <Package className="h-5 w-5 transition-all"/>
                        <span className="sr-only">Logo</span>
                    </Link>

                    <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground " 
                    prefetch={false}
                    >
                        <Home className="h-5 w-5 transition-all"/>
                        <span>Inicio</span>
                    </Link>

                    <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground " 
                    prefetch={false}
                    >
                        <Users className="h-5 w-5 transition-all"/>
                        <span>Usuario</span>
                    </Link>

                    <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground " 
                    prefetch={false}
                    >
                        <ShoppingBag className="h-5 w-5 transition-all"/>
                        <span>Produtos</span>
                    </Link>

                    <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground " 
                    prefetch={false}
                    >
                        <Home className="h-5 w-5 transition-all"/>
                        <span>Inicio</span>
                    </Link>

                    <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground " 
                    prefetch={false}
                    >
                        <SettingsIcon className="h-5 w-5 transition-all"/>
                        <span>Configuração</span>
                    </Link>
                  </nav>
              
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
    </>
  );
}
