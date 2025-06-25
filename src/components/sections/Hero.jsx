import React from "react";
import { Heading, Text, Button, Flex } from '@radix-ui/themes';
import Header from '@/components/layout/Header';

const Hero = () => {


        return (
                <div className="max-w-3xl mx-auto p-4">
                  <Heading weight="regular" align="center">Keep Your Kids Safe Online with Smart Monitoring</Heading>
                  <Text color="gray" size="2">
            			Comprehensive digital safety solution with trusted app reviews, parent community, 
                  and daily wellbeing insights.
            		</Text>
            
                <Flex justify="center" align="center">
                <Button 
                   style={{ 
                    backgroundColor: 'black', 
                    color: 'white',
                    // Optional: Add hover effects
                    transition: 'background-color 0.2s',
                    '&:hover': { backgroundColor: '#333' }
                  }}
                variant="solid" 
                radius="large"
                >
                   Download Free 
             		</Button> 
                 </Flex>
                 <Text color="gray" size="1" >
                   Available on iOS & Android 
             		</Text>
                 {/* <Header /> */}
                
                 </div>  
            
          
            
    )

}

export default Hero; 