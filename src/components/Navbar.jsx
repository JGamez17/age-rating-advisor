import Link from 'next/link';
import { useRouter } from 'next/router'
import { Flex, Button, Box } from '@radix-ui/themes';


const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    // Navigation items - need to get from UI *
    const navItems = [
        { href: '/', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/support', label: 'Support' },
    ];

    return (
        <Flex 
            asChild
            position="sticky"
            top='0'
            p='4'
            align='center'
            justify='between'
            style={{
                backgroundColor: 'var(--color-background)',
                borderBottom: '1px solid var(--gray-a6)',
                zIndex: 1000
            }}
        >
        <nav>
            <Flex align="center" gap='5'>

                <Flex asChild gap="3" justify="center" align="center">
                    <Box>
                        {navItems.map((item) => (
                          <Button 
                          style={{ 
                             
                            color: 'black',
                            // Optional: Add hover effects
                            transition: 'background-color 0.2s',
                            '&:hover': { backgroundColor: '#333' }
                          }}
                            key={item.href}
                            asChild
                            variant={currentRoute === item.href ? 'solid' : 'ghost'}
                            size='2'
                          >
                            <Link href={item.href}>
                                 {item.label}
                            </Link>  
                         </Button>    
                        ))}
                    </Box>
                </Flex>
            </Flex>

         <Button 
            style={{ 
                backgroundColor: 'black', 
                color: 'white',
                // Optional: Add hover effects
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: '#333' }
              }}
         size='3' variant='soft'>
            Get Started 
            </Button>   
         </nav>
        </Flex>
    );
};

export default Navbar;

